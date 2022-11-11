import { createSchema } from "graphql-yoga";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type helloReturnType {
      id: String!
    }

    type Query {
      hello(id: String!): helloReturnType!
    }
  `,
  resolvers: {
    Query: {
      hello: (id: string) => ({ id }),
    },
  },
});

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
