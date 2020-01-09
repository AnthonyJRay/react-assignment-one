import React from 'react';
import './InputStyles.css'

const inputStyle = {
  backgroundColor: 'lightgrey',
  border: '1px solid green',
  width: '40%',
  padding: '15px'
}

const UserInput = (props) => {
  return (
    <div className="InputContainer">
      <input style={inputStyle} type="text"
        onChange={props.changed}
        value={props.initialValue} />
    </div>
  )
}

export default UserInput;