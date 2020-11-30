import React, { useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter'
import InputSample from './InpustSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중..');
  return users.filter(user => user.active).length;
}

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
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
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

  // onToggle
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  
  const count = useMemo(()=>countActiveUsers(users),[users]);
  return (
    <>
      {/* <Counter/> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
