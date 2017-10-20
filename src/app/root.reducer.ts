import {routerReducer as router} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {navReducer as nav} from './nav/nav.reducer';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    nav
  })
);
