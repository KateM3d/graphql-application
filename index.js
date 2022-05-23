const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql `
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "World!";
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("server is listening at " + url);
});