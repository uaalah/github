import {
  ApolloClient,
  InMemoryCache,
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


