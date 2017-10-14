import {routerReducer as router} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {navReducer as nav} from './nav/nav.reducer';

export const rootReducer = combineReducers({
  router,
  nav
});
