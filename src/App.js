import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';
import Modal from './components/UI/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const insertUserHandler = (userData) => {
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  };

  const receivedErrorHandler = (error) => {
    setErrorMessage(error);
  };

  const resetHandler = () => {
    setErrorMessage('');
  };

  return (
    <React.Fragment>
      {errorMessage.length > 0 && (
        <Modal error={errorMessage} onReset={resetHandler} />
      )}
      <AddUser
        onIncomingData={insertUserHandler}
        onReceiveError={receivedErrorHandler}
      />
      {users.length > 0 && <UsersList userData={users} />}
    </React.Fragment>
  );
}

export default App;
