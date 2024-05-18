
function ProfilePicture() {

    const imgURL = './src/assets/photo.jpg'

    const handleClick = (e) => {

        const styles = {
            display: 'none'
        }

       Object.assign(e.target.style, styles)
    }

    return (
        <img onClick={(e) => {
            handleClick(e);
        }} src={imgURL} alt="picture" />
    );
}

export default ProfilePicture;