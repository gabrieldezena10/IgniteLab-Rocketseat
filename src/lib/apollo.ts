import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4wutp3f0c7501t40rw2bgtm/master',
  cache: new InMemoryCache()
});