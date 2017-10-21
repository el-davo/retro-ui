import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import ApolloClient from 'apollo-client/ApolloClient';
import {createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';
import {environment} from '../../environments/environment';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: environment.graphqlApi
  }),
});

export function getGraphQlClient() {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(getGraphQlClient)
  ],
  declarations: []
})
export class GraphqlModule {
}
