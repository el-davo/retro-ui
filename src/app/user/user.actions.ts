import {Injectable} from '@angular/core';

@Injectable()
export class UserActions {

  static LOGIN = 'user/LOGIN';
  static LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'user/LOGIN_FAIL';

  static SIGNUP = 'user/SIGNUP';
  static SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
  static SIGNUP_FAIL = 'user/SIGNUP_FAIL';

  login = () => ({type: UserActions.LOGIN});

  loginSuccess = () => ({type: UserActions.LOGIN_SUCCESS});

  loginFail = () => ({type: UserActions.LOGIN_FAIL});

  signup = () => ({type: UserActions.SIGNUP});

  signupSuccess = () => ({type: UserActions.LOGIN_SUCCESS});

  signupFail = () => ({type: UserActions.SIGNUP_FAIL});
}
