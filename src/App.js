import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter'
import InputSample from './InpustSample';
import UserList from './UserList';
import CreateUser from './CreateUser'

function App() {
  // useState 사용
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  // onChange
  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  
  const [users, setUsers] = useState ([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
  
  // onCreate
  const nextId = useRef(4); // 상태변화를 위한 useRef 사용
  const onCreate = () => {
    // 기본 로직
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  };

  //onRemove
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
