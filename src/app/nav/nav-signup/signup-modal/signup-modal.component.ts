import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {MatDialogRef} from '@angular/material';
import {NavActions} from '../../nav.actions';
import {UserActions} from '../../../user/user.actions';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  constructor(private userActions: UserActions,
              private navActions: NavActions,
              public dialogRef: MatDialogRef<SignupModalComponent>) {
  }

  @dispatch()
  closeModal() {
    this.dialogRef.close();
    return this.navActions.hideLoginModal();
  }

  @dispatch()
  signup() {
    return this.userActions.signup();
  }
}
