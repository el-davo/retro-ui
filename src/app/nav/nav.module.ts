import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material/material.module';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions
  ]
})
export class NavModule {
}
