const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
  }
`;
const data = {
  greeting: 'Hellow worl!',
  interestingUrls: ['https://kursreacta.pl', 'http://ms-m.pl'],
};
const server = new ApolloServer({
  typeDefs,
  rootValue: data,
});

server.listen({ port: 4000 }).then((result) => console.log(result.url));
