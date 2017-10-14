import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material/material.module';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {NavActions} from './nav.actions';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions,
    NavEpics
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class NavModule {
}
