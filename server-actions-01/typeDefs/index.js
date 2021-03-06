const { gql } = require('apollo-server-express');

const userTypeDefs = require('./user');
const actionTypeDefs = require('./action');

const typeDefs = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  typeDefs,
  userTypeDefs,
  actionTypeDefs
]