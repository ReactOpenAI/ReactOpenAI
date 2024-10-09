import { useEffect, useState } from 'react';
import './AiModels.css';

export default function AiModels(props) {
    const {setAiModelSelection}=props

    return (
        <div className="ai-models-container">
            {/* <label for="dropdown">Choose an AI Model</label>
            <select id="dropdown" name="dropdown" onChange={(event)=>setAiModelSelection(event.target.value)}>
                <option value="gpt-3.5-turbo">GPT 3.5 Turbo</option>
                <option value="gpt-4-turbo">GPT 4 Turbo</option>
                <option value="gpt-4o-mini">GPT 4o mini</option>
            </select> */}
            <label><input defaultChecked type="radio" value="gpt-3.5-turbo" name="AiModel" onClick={(event)=>setAiModelSelection(event.target.value)}/>🥰</label>
            <label><input type="radio" value="gpt-4o-mini" name="AiModel" onClick={(event)=>setAiModelSelection(event.target.value)}/>😊</label>
            <label><input type="radio" value="gpt-4-turbo" name="AiModel" onClick={(event)=>setAiModelSelection(event.target.value)}/>😒</label>
        </div> 
    )
}