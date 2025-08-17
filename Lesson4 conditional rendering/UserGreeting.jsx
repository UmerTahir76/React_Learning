//conditional rendering

function Greeting(props) {

    const message = <h2>Welcome {props.username} </h2>

    return (props.isLoggedIn ? message: <h2>Please Log in to constinue</h2>);

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }else{
    //     return <h2>Please Log in</h2>
    // }

}
export default Greeting