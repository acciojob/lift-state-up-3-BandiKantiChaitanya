import React from 'react'
import './../styles/App.css';

function ChildComponent1({setSelectedOption}) {
    function handleButton(){
        setSelectedOption(' Option 1')
    }
  return (
    <div className='child1' >
        <h2>Child Component1</h2>
        <button onClick={handleButton} >Option 1</button>
    </div>
  )
}

export default ChildComponent1