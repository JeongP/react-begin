import React from 'react';

function User({user, onRemove}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList ({users,onRemove, onToggle}) {

  return(
    <div>
      {users.map(user => (
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}


export default UserList;