import { graphql } from "../../gql";

export const registerUser = graphql(`#graphql
query registerUser($firstName: String!, $lastName: String!, $email: String!, $profileImageUrl: String!) {
    registerUser(firstName: $firstName, lastName: $lastName, email: $email, profileImageUrl: $profileImageUrl)
  }
`)
