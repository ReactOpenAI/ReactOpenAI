import './App.css';
import {useState} from 'react';
import MessagesContainer from './components/MessagesContainer/MessagesContainer.js';
import AiModels from './components/AiModels/AiModels.js';

function App() {
  const [aiModelSelection, setAiModelSelection] = useState('gpt-3.5-turbo')
  console.log(aiModelSelection)
  return (
    <div className="App">
      <MessagesContainer aiModelSelection={aiModelSelection}/>
      <AiModels aiModelSelection={aiModelSelection} setAiModelSelection={setAiModelSelection}/>
    </div>
  );
}

export default App;
