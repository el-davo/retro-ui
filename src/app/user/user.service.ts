import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {SignupForm} from './user.state';

@Injectable()
export class UserService {

  private signupQuery = gql`
  mutation createUser($userForm: JSON) {
    userCreate(input:{data: $userForm}) {
      obj {
        id
        username
      }
    }
  }`;

  constructor(private apollo: Apollo) {
  }

  signup(signupForm: SignupForm) {
    return this.apollo.mutate({
      mutation: this.signupQuery,
      variables: {
        userForm: {
          username: signupForm.username,
          email: signupForm.email,
          password: signupForm.password
        }
      }
    });
  }

}
