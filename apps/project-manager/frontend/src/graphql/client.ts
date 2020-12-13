import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { projects } from './cache';

export const typeDefs = gql`
  extend type Query {
    gitlabUrl: String!
  }
`;

export const client = new ApolloClient<any>({
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    projects: {
                        read() {
                            return projects();
                        }
                    },
                }
            }
        }
    }),
    typeDefs
});
