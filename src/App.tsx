import * as React from 'react';
import {useState} from 'react'

interface ButtonProps {
    label: string;
    value: string;
    onClick(e:any): void
}

interface DisplayProps {
    label: string;
}

const DisplayComponent = (props: DisplayProps) => {
    return(
        <div>
            <h1>{props.label}</h1>
        </div>
    )
}

const ButtonComponent = (props:ButtonProps) => {
    return(
        <button value={props.value} onClick={props.onClick}>{props.label}</button>
    );
}

function App() {

    let [buttonClicked, setButtonClicked] = useState('');

    const handleClick = (event:any) => {
        setButtonClicked(event)
    }

    return (
        <div>
            <ButtonComponent label='Click 1' value='1' onClick={handleClick}/>
            <ButtonComponent label='Click 2' value='2' onClick={handleClick}/>
            <ButtonComponent label='Click 3!' value='3' onClick={handleClick}/>
        </div>
    );
}

export default App;