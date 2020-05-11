import React, {Component} from 'react';
import './App.css';

const  App = () => {
  return (
    <div>
      <Header />
      <Technologies />
  
    </div>
  );
}

const Technologies = () => {
  return(
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

const  Header = () => {
  return (
    <div>
      <p>Hello someone</p>
      <a href='#s'>Home </a>
      <br/>
      <a href='#s'>News feed </a>
      <br/>
      <a href='#s'>Messages </a>
    </div>
  );
}



export default App;
