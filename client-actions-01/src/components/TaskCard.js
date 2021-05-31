import React, { useState } from 'react'
import styled from 'styled-components';

import Modal from './Modal';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Button = styled.button`
  min-width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
`

const TaskCard = ({ task }) => {
    const { id, title, description, notes } = task;
    console.log('item?', id, title, description, notes)

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        console.log('modal btn clicked', showModal);
        setShowModal(prev => !prev);
      }

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button style={{ backgroundColor: "moccasin", color: "midnightblue" }}>Add Note</Button>

            {notes && notes.length > 0 
            ? <Button onClick={openModal}>Show Note(s)</Button>
            : null
            }
            <Modal showModal={showModal} setShowModal={setShowModal} contents={notes} />
        </div>
    )
}

export default TaskCard;