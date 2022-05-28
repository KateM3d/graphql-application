const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql `
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "World!";
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 34.23;
        },
        isCool: () => {
            return true;
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