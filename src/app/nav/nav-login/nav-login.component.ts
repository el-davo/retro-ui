import {Component} from '@angular/core';
import {NavActions} from '../nav.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent {

  constructor(private navActions: NavActions) {
  }

  @dispatch()
  showLoginModal = () => this.navActions.showLoginModal();

}
