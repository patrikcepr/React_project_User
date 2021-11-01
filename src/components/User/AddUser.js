import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';

import styled from 'styled-components';

const Input = styled.form`
  margin: 2rem auto;
  padding: 1rem;
  /* width: 100%; */
  /* max-width: 40rem; */

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const userNameInputHandler = (ev) => {
    setUserName(ev.target.value);
  };

  const userAgeInputHandler = (ev) => {
    setUserAge(ev.target.value);
  };

  const submitUserHandler = (ev) => {
    ev.preventDefault();
    const userData = { name: userName, age: +userAge, id: Math.random() };

    if (userName.trim().length === 0) {
      props.onReceiveError({
        title: 'Invalid input',
        message: 'Enter a valid name and age (non empty values).',
      });
      return;
    }

    if (userName.trim().length > 0 && +userAge <= 0) {
      props.onReceiveError({
        title: 'Invalid age',
        message: 'Enter a valid age(>0).',
      });
      return;
    }

    props.onIncomingData(userData);

    setUserName('');
    setUserAge('');
  };

  return (
    <Card>
      <Input onSubmit={submitUserHandler}>
        <label>Username</label>
        <input
          type='text'
          name='user'
          id='user'
          value={userName}
          onChange={userNameInputHandler}
        />
        <label>Age (Years)</label>
        <input
          type='number'
          name='age'
          id='age'
          value={userAge}
          onChange={userAgeInputHandler}
        />
        <Button type='submit'>Add User</Button>
      </Input>
    </Card>
  );
};

export default AddUser;
