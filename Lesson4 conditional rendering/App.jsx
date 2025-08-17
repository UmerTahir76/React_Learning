// props = read only properties that are shared between components.
//          A parent component send data to a child component
//          <Component key=value/>


import Student from "../../Lesson4 conditional rendering/Student";
import UserGreeting from "../../Lesson4 conditional rendering/UserGreeting"
function App() {

  return(

    <>
    <Student name = "Umer" age = {22} isStudent = {true}/>
    <Student/>
    <UserGreeting isLoggedIn = {true} username = "Umer"/>
    </>
  );
}

export default App
