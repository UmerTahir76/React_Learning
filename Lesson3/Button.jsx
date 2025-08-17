
function Button() {

    // inline style 
    // var style = {
    //     backgroundColor:" hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer"
    // }

    //     return(
    //     <button style={style}>Click Me</button>
    // );
    //module css 
    // new folder Button 
    // move Button.jsx to that folder 
    // make a file name Button.module.css and do the styling there
    // access: import the file in this file 
    // import styles from "path"
    // className =  {styles.button}

    // External 

    return(
        <button className="button">Click Me</button>
    );
}
export default Button;