import { gql } from "@apollo/client";

export const GET_ISSUES = gql`
  query GetIssues($query: String!){
  search(query: $query, type: ISSUE, first: 40) {
    issueCount
    
    nodes {
      ... on Issue {
        number
        title
        state
        comments{
          totalCount
        }
        labels(first: 10){
          nodes{
            name
            color
          }
        }
      }
    }
  }
}
`