const uuid = require('uuid');


const { actions, users } = require('../data');

module.exports = {
    Query: {
        actions: () => actions
    },
    Action: {
        user: ({ userId }) => {
            return users.find(user => user.id === userId);
        }
    }
}

