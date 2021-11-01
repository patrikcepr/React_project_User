import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Button';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalLayer = styled.div`
  position: fixed;
  background-color: white;
  top: 30vh;
  left: 10%;
  width: 80%;
  border-radius: 10px;
  z-index: 100;
  overflow: hidden;

  & .header {
    background: #4f005f;
    padding: 1rem;
  }

  & .header h2 {
    margin: 0;
    color: white;
  }

  & .content {
    padding: 1rem;
  }

  & .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Modal = (props) => {
  const resetHandler = () => {
    props.onReset(true);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={resetHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalLayer>
          <div className='header'>
            <h2>{props.error.title}</h2>
          </div>
          <div className='content'>{props.error.message}</div>
          <div className='actions'>
            <Button onClick={resetHandler}>Back</Button>
          </div>
        </ModalLayer>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
