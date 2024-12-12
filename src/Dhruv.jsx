// import App from './App.jsx'
import {useState} from "react";

function Dhruv(props){

    // let counter = 1125;
    const [counter, setCounter] = useState(5);

    const addValue = function (){
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const subtractValue = function (){
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <h1>This is {props.name}</h1>
            <h2>Counter: {counter}</h2>

            <button onClick={addValue}>Add</button><br/>
            <button onClick={subtractValue}>Subtract</button>
        </>
    )
}

export default Dhruv