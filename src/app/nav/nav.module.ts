import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material/material.module';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';
import {NavSignupComponent} from './nav-signup/nav-signup.component';
import {SignupModalComponent} from './nav-signup/signup-modal/signup-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent,
    NavSignupComponent,
    SignupModalComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions,
    NavEpics
  ],
  entryComponents: [
    LoginModalComponent,
    SignupModalComponent
  ]
})
export class NavModule {
}
