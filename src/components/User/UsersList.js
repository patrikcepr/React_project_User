import React from 'react';
import Card from '../UI/Card';

import styled from 'styled-components';

const Users = styled.div`
  margin: 2rem auto;
  /* width: 90%;
  max-width: 40rem; */

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UsersList = (props) => {
  return (
    <Card>
      <Users>
        <ul>
          {props.userData.map((el) => {
            return (
              <li key={el.id}>
                {el.name} ({el.age} years old)
              </li>
            );
          })}
        </ul>
      </Users>
    </Card>
  );
};

export default UsersList;
