import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class UserService {

  private signupQuery = gql`
  query CurrentUserForProfile($avatarSize: Int!) {
    currentUser {
      login
      avatar_url(avatarSize: $avatarSize)
    }
  }`;

  constructor(private apollo: Apollo) {
  }

  signup() {
    return this.apollo.mutate({mutation: this.signupQuery});
  }

}
