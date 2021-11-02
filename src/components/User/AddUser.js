import React, { useRef } from 'react';

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
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitUserHandler = (ev) => {
    ev.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const userData = { name: enteredName, age: +enteredAge, id: Math.random() };

    if (enteredName.trim().length === 0) {
      props.onReceiveError({
        title: 'Invalid input',
        message: 'Enter a valid name and age (non empty values).',
      });
      return;
    }

    if (enteredName.trim().length > 0 && +enteredAge <= 0) {
      props.onReceiveError({
        title: 'Invalid age',
        message: 'Enter a valid age(>0).',
      });
      return;
    }

    props.onIncomingData(userData);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <Card>
      <Input onSubmit={submitUserHandler}>
        <label>Username</label>
        <input type='text' name='user' id='user' ref={nameInputRef} />
        <label>Age (Years)</label>
        <input type='number' name='age' id='age' ref={ageInputRef} />
        <Button type='submit'>Add User</Button>
      </Input>
    </Card>
  );
};

export default AddUser;
