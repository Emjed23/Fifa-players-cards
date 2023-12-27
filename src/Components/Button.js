import React from 'react'

export default function Button() {
    function handleClick() {
      alert('Hey there Im a Footballer');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }