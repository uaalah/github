import {
  ApolloClient,
  InMemoryCache,
  gql,
  NormalizedCacheObject
} from "@apollo/client";

const TOKEN: string ='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'

export const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${TOKEN}`
  }
});



export const GET_ISSUES = gql`
  query GetIssues($query: String!){
  search(query: $query, type: ISSUE, first: 100) {
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
