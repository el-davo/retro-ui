export const navState: NavState = {
  showLoginModal: false,
  showSignupModal: false,
  isSigningUp: false
};

export interface NavState {
  showLoginModal: boolean;
  showSignupModal: boolean;
  isSigningUp: boolean;
}
