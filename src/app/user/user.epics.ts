import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserActions} from './user.actions';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserEpics {
  constructor(private userActions: UserActions,
              private userService: UserService,
              public dialog: MatDialog) {
  }

  login = action$ => {
    return action$.ofType(UserActions.LOGIN)
      .map(() => {
        this.dialog.closeAll();

        return {type: this.userActions.loginSuccess()};
      });
  };

  signup = (action$, store) => {
    return action$.ofType(UserActions.SIGNUP)
      .mergeMap(() => {
        const {signupForm} = store.getState().user;

        console.log(signupForm);
        // this.dialog.closeAll();

        return this.userService.signup(signupForm)
          .map(data => {
            console.log(data);
            return this.userActions.signupSuccess()
          })
          .catch(err => {
            console.log(err);
            return Observable.of(this.userActions.signupFail())
          });
      });
  };

}
