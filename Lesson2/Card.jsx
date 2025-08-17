import ProfilePic from "./assets/profile.jpg"
function Card() {

    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Umer Ali Tahir</h2>
            <p className="card-text">I'm a React Developer</p>
        </div>
    );
}
export default Card;