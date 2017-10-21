import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import {UserEpics} from './user.epics';
import {UserActions} from './user.actions';
import {GraphqlModule} from '../graphql/graphql.module';

@NgModule({
  imports: [
    CommonModule,
    GraphqlModule
  ],
  declarations: [],
  providers: [
    UserService,
    UserEpics,
    UserActions
  ]
})
export class UserModule {
}
