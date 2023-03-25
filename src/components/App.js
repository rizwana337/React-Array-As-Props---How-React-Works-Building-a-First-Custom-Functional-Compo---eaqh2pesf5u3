import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  const { words } = props;
  const joinedWords = words.join(',');
  return(
    <div id ="join">
      {joinedWords.replace(/hello|world|React/g, match => match[0])}
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
