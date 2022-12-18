import { gql } from "graphql-tag";

gql(`query Characters {
  characters {
    results {
      id
      name
      status
      gender
    }
  }
}`);

gql(`query Character($id: ID!) {
  character(id: $id) {
    id
    name
    status
    gender
  }
}`);
