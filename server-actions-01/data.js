module.exports.actions = [
    { id: "action-1", userId: 2, title: 'First Task', description: 'A description of task (1)...', notes: [], isReady: true, isInProgress: false, isCompleted: true },
    { id: "action-2", userId: 1, title: 'Second Task', description: 'A description of task (2)...', notes: ["A note about this task...", "Another note about this task"], isReady: true, isInProgress: true, isCompleted: false },
    { id: "action-3", userId: 4, title: 'Third Task', description: 'A description of task (3)...', notes: ["A note about the 3rd task"], isReady: false, isInProgress: false, isCompleted: false },
    { id: "action-4", userId: 2, title: 'Fourth Task', description: 'A description of task (4)...', notes: ["A note about the 4th task"], isReady: true, isInProgress: false, isCompleted: false }
];

module.exports.users = [
    { id: "1", name: "panda", email: "panda@endor.com" },
    { id: "2", name: "sake", email: "sake@endor.com" },
    { id: "3", name: "lite", email: "lite@endor.com" },
    { id: "4", name: "ewok", email: "ewok@endor.com" },
];
  
module.exports.columns = {
    ["column-1"]: {
        name: 'Action Items',
        items: []
    },
    ["column-2"]: {
        name: 'Ready To Start',
        items: []
    },
    ["column-3"]: {
        name: 'In Progress',
        items: []
    },
    ["column-4"]: {
        name: 'Completed',
        items: []
    }
};