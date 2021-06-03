const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        users: [User!]
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        actions: [Action!]
    }
`;
