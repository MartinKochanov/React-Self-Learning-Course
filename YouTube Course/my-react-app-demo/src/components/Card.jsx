import profilePic from './assets/photo.jpg'
function Card() {


    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" ></img>
            <h2 className='card-title'>Hello i`m Martin </h2>
            <p className='card-text'>I am a Java Web Development Student</p>
        </div>
    );
}

export default Card;