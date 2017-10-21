export const userState: UserState = {
  isSigningUp: false,
  isLoggingIn: false,
  signupForm: {
    username: '',
    email: '',
    password: '',
    passwordRetype: ''
  }
};

export interface UserState {
  isSigningUp: boolean;
  isLoggingIn: boolean;
  signupForm: SignupForm
}

export interface SignupForm {
  username: string;
  email: string;
  password: string;
  passwordRetype: string;
}
