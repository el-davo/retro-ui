import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {dispatch} from '@angular-redux/store';
import {NavActions} from '../../nav.actions';
import {UserActions} from '../../../user/user.actions';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  constructor(private userActions: UserActions,
              private navActions: NavActions,
              public dialogRef: MatDialogRef<LoginModalComponent>) {
  }

  @dispatch()
  closeModal() {
    this.dialogRef.close();
    return this.navActions.hideLoginModal();
  }

  @dispatch()
  login() {
    return this.userActions.login();
  }
}
