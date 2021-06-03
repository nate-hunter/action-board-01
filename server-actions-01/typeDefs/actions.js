const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        actions: [Action!]
    }

    type Action {
        id: ID!
        name: String!
        description: String!
        notes: [Note!]
        isReady: Boolean!
        isInProgress: Boolean!
        isCompleted: Boolean!
        user: User!
    }

    type Note {
        id: ID!
        content: String!
        action: Action!
    }
`;