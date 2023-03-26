import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
    const { words } = props;
  const commaSeparated = words.join(',');
  return(
    <div id ="join">
      {commaSeparated}
    </div>
  )
}
const App = () => {
  return (
    <div id="main">
    
      <Join words={arr} />
    </div>
  )
}


export default App;
