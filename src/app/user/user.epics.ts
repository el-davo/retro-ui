import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserActions} from './user.actions';

@Injectable()
export class UserEpics {
  constructor(private userActions: UserActions,
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
      .map(() => {
        const {signupForm} = store.getStore().nav;
        this.dialog.closeAll();

        return {type: this.userActions.loginSuccess()};
      });
  };

}
