import {NavState, navState} from './nav.state';
import {NavActions} from './nav.actions';

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
    case NavActions.SIGNUP:
      return {...state, isSigningUp: true};
    case NavActions.SIGNUP_SUCCESS:
      return {...state, isSigningUp: false, showSignupModal: false};
    case NavActions.SIGNUP_FAIL:
      return {...state, isSigningUp: false};
    default:
      return state;
  }
};
