import {NavState, navState} from './nav.state';
import {NavActions} from './nav.actions';
import {UserActions} from '../user/user.actions';

export const navReducer = (state: NavState = navState, action): NavState => {
  switch (action.type) {
    case NavActions.SHOW_LOGIN_MODAL:
      return {...state, showLoginModal: true};
    case NavActions.HIDE_LOGIN_MODAL:
      return {...state, showLoginModal: false};
    case NavActions.SHOW_SIGNUP_MODAL:
      return {...state, showSignupModal: true};
    case NavActions.HIDE_SIGNUP_MODAL:
      return {...state, showSignupModal: false};
    case UserActions.SIGNUP_SUCCESS:
      return {...state, showSignupModal: false};
    default:
      return state;
  }
};
