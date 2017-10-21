import {Injectable} from '@angular/core';

@Injectable()
export class NavActions {

  static SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
  static HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

  static SHOW_SIGNUP_MODAL = 'nav/SHOW_SIGNUP_MODAL';
  static HIDE_SIGNUP_MODAL = 'nav/HIDE_SIGNUP_MODAL';

  showLoginModal() {
    return {type: NavActions.SHOW_LOGIN_MODAL};
  }

  hideLoginModal() {
    return {type: NavActions.HIDE_LOGIN_MODAL};
  }

  showSignupModal() {
    return {type: NavActions.SHOW_SIGNUP_MODAL};
  }

  hideSignUpModal() {
    return {type: NavActions.HIDE_SIGNUP_MODAL};
  }
}
