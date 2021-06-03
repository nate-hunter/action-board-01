const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');


const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

dotEnv.config();

const app = express();

app.use(cors());

app.use(express.json());

// const typeDefs = gql`
//     type Query {
//         test: String!
//     }
// `;

// const resolvers = {
//     Query: {
//         test: () => "Test query for a string"
//     }
// }

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
    res.send({ message: 'TESTING EXPRESS SERVER...'})
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})