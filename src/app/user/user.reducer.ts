import {UserState, userState} from './user.state';
import {UserActions} from './user.actions';

export const userReducer = (state: UserState = userState, action): UserState => {
  switch (action.type) {
    case UserActions.SIGNUP:
      return {...state, isSigningUp: true};
    case UserActions.SIGNUP_SUCCESS:
      return {...state, isSigningUp: false};
    case UserActions.SIGNUP_FAIL:
      return {...state, isSigningUp: false};
    case UserActions.LOGIN:
      return {...state, isLoggingIn: true};
    case UserActions.LOGIN_SUCCESS:
      return {...state, isLoggingIn: false, isLoggedIn: true, user: action.user};
    case UserActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false};
    default:
      return state;
  }
};
