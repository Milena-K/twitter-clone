import giraffe from './img/giraffe.jpg';
const ProfilePic = () => {
  return (
    <div style={{
      width: '50px',
      height: '50px',
    }}>
      <img
        id='profilePic'
        src={giraffe}
        alt="profile"
        style={{
          borderRadius: '50%',
          backgroundSize: 'contain',
          background: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

export default ProfilePic;
