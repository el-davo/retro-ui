import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {NavActions} from '../nav.actions';

@Component({
  selector: 'app-nav-signup',
  templateUrl: './nav-signup.component.html',
  styleUrls: ['./nav-signup.component.css']
})
export class NavSignupComponent {

  constructor(private navActions: NavActions) {
  }

  @dispatch()
  showSignupModal() {
    return this.navActions.showSignupModal();
  }
}
