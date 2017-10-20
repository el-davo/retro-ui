import {Injectable} from '@angular/core';

@Injectable()
export class NavActions {

  static SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
  static HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

  static LOGIN = 'nav/LOGIN';
  static LOGIN_SUCCESS = 'nav/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'nav/LOGIN_FAIL';

  static SHOW_SIGNUP_MODAL = 'nav/SHOW_SIGNUP_MODAL';
  static HIDE_SIGNUP_MODAL = 'nav/HIDE_SIGNUP_MODAL';

  static SIGNUP = 'nav/SIGNUP';
  static SIGNUP_SUCCESS = 'nav/SIGNUP_SUCCESS';
  static SIGNUP_FAIL = 'nav/SIGNUP_FAIL';

  showLoginModal() {
    return {type: NavActions.SHOW_LOGIN_MODAL};
  }

  hideLoginModal() {
    return {type: NavActions.HIDE_LOGIN_MODAL};
  }

  login() {
    return {type: NavActions.LOGIN};
  }

  loginSuccess() {
    return {type: NavActions.LOGIN_SUCCESS};
  }

  loginFail() {
    return {type: NavActions.LOGIN_FAIL};
  }

  showSignupModal() {
    return {type: NavActions.SHOW_SIGNUP_MODAL};
  }

  hideSignUpModal() {
    return {type: NavActions.HIDE_SIGNUP_MODAL};
  }

  signup() {
    return {type: NavActions.SIGNUP};
  }

  signupSucess() {
    return {type: NavActions.SIGNUP_SUCCESS};
  }

  signupFail() {
    return {type: NavActions.SIGNUP_FAIL};
  }
}
