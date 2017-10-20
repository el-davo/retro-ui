import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {MatDialogRef} from '@angular/material';
import {NavActions} from '../../nav.actions';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  constructor(private navActions: NavActions, public dialogRef: MatDialogRef<SignupModalComponent>) {
  }

  @dispatch()
  closeModal() {
    this.dialogRef.close();
    return this.navActions.hideLoginModal();
  }

  @dispatch()
  signup() {
    return this.navActions.signup();
  }
}
