import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  const { words } = props;
  const joinedWords = words.join(',');
  return(
    <div id ="join">
    {joinedWords}
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
    </div>
  )
}
const App = () => {
const arr = ['hello', 'world', 'React'];
  return (
    <div id="main">
    
      <Join words={arr} />
    </div>
  )
}


export default App;
