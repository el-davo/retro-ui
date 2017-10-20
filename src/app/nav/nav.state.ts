export const navState: NavState = {
  showLoginModal: false,
  showSignupModal: false,
  isSigningUp: false,
  signupForm: {
    username: '',
    email: '',
    password: '',
    passwordRetype: ''
  }
};

export interface NavState {
  showLoginModal: boolean;
  showSignupModal: boolean;
  isSigningUp: boolean;
  signupForm: SignupForm;
}

export interface SignupForm {
  username: string;
  email: string;
  password: string;
  passwordRetype: string;
}
