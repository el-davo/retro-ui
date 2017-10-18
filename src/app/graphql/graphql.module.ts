import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';
import {environment} from '../../environments/environment';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: environment.graphUri
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(provideClient)
  ],
  declarations: []
})
export class GraphqlModule {
}
