
import './App.css';
import Players from './Components/Players';

import React from 'react'

const App = () => {

  const handleName=(name)=>{
    alert(name)
  }
  return (
    <div className='Body'>
      <h1 className='title'>FIFA players cards</h1>
         <h className='cards'>
         <div className='P1'>
       <Players handleName={handleName} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIv5cC0QppL986OtYQXsoH2lj4AtypR4n-9w&usqp=CAU" name ="Lionel" lastname="Messi" age={37} nationality="Argentine" jerseynumber={10}/>
  </div>
     <div className='P2'>
       <Players  handleName={handleName} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVkuVCz4kVL5P7fKkJ4Ydf4Ag85GgkX9KTxIZx9Zzjv9LLp9Qp2b-2PkSteNJ5SAPI6U&usqp=CAU" name ="Mohamed" lastname="Salah" age={31} nationality="Egyptian" jerseynumber={11}/>
         </div>
          <div className='P3'>  
       <Players  handleName={handleName} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDsSnnXrvjf06023_0gb4J2feoyep__0akQ&usqp=CAU" name ="Mbappe" lastname="Kyliani" age={25} nationality="French" jerseynumber={7}/> 
       </div>
       </h>
    </div>
  );
}

export default App