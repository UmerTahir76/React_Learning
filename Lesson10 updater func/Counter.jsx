// Updater function =  A function passed as an argumentto setstate() usually 
//                     ex. setYear(arrow func) 
//                     Allows for safer updates  based on the previous state
//                     Used with Multiple stateupdates  and async functions
//                     Good practice to use updater function

import React, {useState} from "react";

function Counter () {

    const [count, setCount] = useState(0);
 

    const Increment = ()=> {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1); // output 2
    }
    const Reset = ()=> {
        setCount(0);
    }
    const Decrement = ()=> {
        setCount(count-1);
    }


    return(
        <>
        <h3>Count: {count}</h3>

        <button onClick={Increment}>Increment</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    );

}
export default Counter