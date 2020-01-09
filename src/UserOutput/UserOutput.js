import React from 'react';

const style = {
  backgroudColor: 'blue',
  border: '1px solid lightgrey',
  width: '60%',
  textAlign: 'center',
  margin: '50px auto',
  padding: '10px'
}

const CardStyles = {
  padding: '10px',
}

const UserOutput = (props) => {
  return (
    <div style={style}>
      <p style={CardStyles}>Username: {props.userName} </p>
      <p>Overwrite Me!</p>
    </div>
  )
}

export default UserOutput;