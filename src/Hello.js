import React from 'react';

function Hello({color, name, isSpecial}) {
  
  return (
    <div>
      {isSpecial && <b>*</b>}{name}
    </div>
  )
}

Hello.defaultProps = {
  name: 'NoName'
}
export default Hello;