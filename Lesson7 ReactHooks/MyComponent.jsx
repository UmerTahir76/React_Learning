import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest"); // guest is initial value
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Umer");
    }
    const incrementValue = ()=> {
        setAge(age+1);
    }
    const toggleStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
                <p>Name: {name}</p>
                <button onClick={updateName}> Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementValue}> Increment age</button>

                <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleStatus}> toggle</button>
            </div>);

}
export default MyComponent