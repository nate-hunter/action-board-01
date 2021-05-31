import React from 'react'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import modalImg from './images/modal-2.jpg';

const Background = styled.div`
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.8); */
    background: violet;
    /* position: fixed; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalWrapper = styled.div`
    width: 240px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    /* color: #000; */
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    /* position: relative; */
    /* z-index: 10; */
    border-radius: 10px;
`

const ModalImg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


// const Modal = ({ showModal, setShowModal, contents }) => {
//     console.log('note contents', contents)
//     return (
//         <div>
//             { showModal ? (
//                 <Background>
//                     <ModalWrapper showModal={showModal}>
//                         {/* <ModalImg src={modalImg} alt='modal img' /> */}
//                         <ModalContent>
//                             <h2>Notes:</h2>
//                             {contents.map(note => {
//                               return (
//                                 <ul>
//                                   <li>{note} <button style={{ backgroundColor: '#f99595' }}>Edit Note</button></li>
                                  
//                                 </ul>
//                               )
//                             })}
//                             <button>Add Note</button>
//                         </ModalContent>
//                         <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
//                     </ModalWrapper>
//                 </Background>
//             ) : null }
//         </div>
//     )
// }

const Modal = ({ showModal, setShowModal, contents }) => {
  console.log('contents', contents)
  return (
    <>
      {showModal 
        ? (
          contents.map(note => <ul><li style={{ color: "#f99595" }}>{note}<button>Edit</button><button>Delete</button></li></ul>)
        )
        : null
      }
    </>
  )
}

export default Modal;