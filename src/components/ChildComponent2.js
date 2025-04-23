import React from 'react'
import './../styles/App.css';

function ChildComponent2({setSelectedOption}) {

    function handleButton(){
        setSelectedOption('option2')
    }

  return (
    <div className='child2' >
        <h2>Child Component2</h2>
        <button onClick={handleButton} >option 2</button>
    </div>
  )
}

export default ChildComponent2