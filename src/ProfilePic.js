import giraffe from './img/giraffe.jpg';
const ProfilePic = () => {
  return (
    <div className="profile-pic">
      <img
        id='profilePic'
        src={giraffe}
        alt="profile"
      />
    </div>
  )
}

export default ProfilePic;
