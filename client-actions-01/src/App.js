import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

// import Modal from './components/Modal';
import TaskCard from './components/TaskCard';


const Button = styled.button`
  min-width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
`

const AddActionButton = styled.button`
  min-width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: #f99595;
  color: midnightblue;
  cursor: pointer;
`

const itemsFromBackend = [
  { id: uuid(), title: 'First Task', description: 'A description of task (1)...', notes: [] },
  { id: uuid(), title: 'Second Task', description: 'A description of task (2)...', notes: ["A note about this task...", "Another note about this task"] },
  { id: uuid(), title: 'Third Task', description: 'A description of task (3)...', notes: ["A note about the 3rd task"] }
];

const columnsFromBackend = {
  [uuid()]: {
    name: 'Action Items',
    items: itemsFromBackend
  },
  [uuid()]: {
    name: 'Ready To Start',
    items: []
  },
  [uuid()]: {
    name: 'In Progress',
    items: []
  },
  [uuid()]: {
    name: 'Completed',
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destinationItems = [...destinationColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destinationColumn,
        items: destinationItems
      }
    })
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
}


function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [showModal, setShowModal] = useState(false);

  const handleAddAction = () => {
    console.log('add action button...')
  }

  return (
    <div>
      <h1>ACTION BOARD...</h1>
      <p>Create a list of actions and drag-n-drop them according to its progress.</p>
        <form>
          <input type="text" placeholder="Add Action Title..." />
          <input type="text" placeholder="Add Action Description..." />
          <AddActionButton onClick={handleAddAction}>Add Action Item</AddActionButton>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
            {Object.entries(columns).map(([id, column]) => {
              return (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2>{column.name}</h2>

                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={id} key={id}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver ? 'lightyellow' : 'lightblue',
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: 'none',
                                          padding: 16,
                                          margin: '0 0 8px 0',
                                          minHeight: '50px',
                                          backgroundColor: snapshot.isDragging ? '#f99595' : '#456C86',
                                          color: snapshot.isDragging ? 'midnightBlue' : 'white',
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <div>
                                          <TaskCard task={ item } />
                                          {/* <h3 style={{ color: "moccasin" }}>{item.title}</h3>
                                          <p>{item.description}</p>
                                          <Button style={{ backgroundColor: "moccasin", color: "midnightblue" }}>Add Note</Button>
                                          {item.notes && item.notes.length > 0 
                                            ? <Button onClick={openModal}>Show Note(s)</Button>
                                            : null
                                          }
                                          <Modal showModal={showModal} setShowModal={setShowModal} content={item.notes} /> */}
                                          {/* {showModal && <Modal />} */}
                                        </div>
                                      </div>
                                    )
                                  }}
                                </Draggable>
                              )
                            })}
                            {provided.placeholder}
                          </div>
                        )
                      }}
                    </Droppable>
                  </div>
                </div>
              )
            })}
          </DragDropContext>
      </div>
    </div>
  );
}

export default App;
