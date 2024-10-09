import './App.css';
import {useState} from 'react';
import MessagesContainer from './components/MessagesContainer/MessagesContainer.js'
import Counter from './features/counter/counter.js'

function App() {
  return (
    <div className="App">
      <MessagesContainer/>
      <Counter/>
    </div>
  );
}

export default App;
