import {Injectable} from '@angular/core';

@Injectable()
export class NavActions {

  static SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
  static HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

  static LOGIN = 'nav/LOGIN';
  static LOGIN_SUCCESS = 'nav/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'nav/LOGIN_FAIL';

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
}
