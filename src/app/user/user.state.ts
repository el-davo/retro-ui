export const userState: UserState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggedIn: false,
  signupForm: {
    username: '',
    email: '',
    password: '',
    passwordRetype: ''
  },
  user: null
};

export interface UserState {
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  signupForm: SignupForm;
  user: User;
}

export interface SignupForm {
  username: string;
  email: string;
  password: string;
  passwordRetype: string;
}

export interface User {
  id: string;
  username: string;
}
