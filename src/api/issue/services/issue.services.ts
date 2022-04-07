import { gql } from "@apollo/client";

export const GET_ISSUE = gql`
  query GetIssue($num_issue: Int!, $comments: Int!){
	repository (owner: "facebook", name: "react"){
    
    issue(number: $num_issue){
      id
      author{
        login, 
        avatarUrl
      }
      createdAt
      state
      title
      bodyHTML
      comments (first:$comments, orderBy: {field: UPDATED_AT, direction: DESC}  ){
        totalCount
        nodes{
          createdAt
          author{
            login
            avatarUrl
          }
          body
        }
      }
    }
	}



}
`