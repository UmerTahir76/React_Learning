import React, {useState} from "react";

function Counter () {

    const [count, setCount] = useState(0);
 

    const Increment = ()=> {
        setCount(count+1);
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