
function Button() {

    // const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "Oucch! 🤦‍♂️";

    return(
        <button onDoubleClick={(e) => handleClick(e)}> Click me!😊</button>
    );


    // let count = 0;

    // const handleClick = (name) => {

    //     if(count < 3){
    //         count++;
    //         console.log(`${name} clicked me ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking me` );
    //     }

    // }


    // return(
    //     <button onClick={() => handleClick("Umer")}>Click Me</button>
    // );
}
export default Button