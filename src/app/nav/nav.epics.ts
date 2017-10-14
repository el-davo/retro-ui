import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {NavActions} from './nav.actions';
import {MatDialog} from '@angular/material';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';

@Injectable()
export class NavEpics {
  constructor(private navActions: NavActions, public dialog: MatDialog) {
  }

  showLoginModal = action$ => {
    return action$.ofType(NavActions.SHOW_LOGIN_MODAL)
      .map(() => {
        this.dialog.open(LoginModalComponent).afterClosed();

        return {type: 'UNKNOWN'};
      });
  };

}
