
import React from "react";
import './../styles/App.css';

const App = () => {
   const[value,setValue] = useState(0);

    const increaseValue = () =>{
        setValue(value + 1);
    }


    return(
        <div>
            <p>Button clicked {value} times</p>
            <button onClick={increaseValue}>Click me</button>
        </div>
    )
}

export default App
