import { useState } from 'react';
import { createTweet } from './createTweet';

function NewTweet() {

  const [photos, setPhotos] = useState([]);

  const sendTweet = async (e) => {
    e.preventDefault();
    const tweet = e.target.form[1].value;
    console.log("New Twt:", tweet);
    createTweet(tweet);
  }

  const addPhoto = (e) => {
    const photo = e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
    console.log(photo)
    setPhotos(photos.concat(photo))
  }


  const container = {
    margin: 0,
    height: "100%",
    alignItems: "stretch",
  }

  const prof_pic_container = {
    display: "inline",
    width: "50%",
  }
  const new_tweet_container = {
    display: "inline",
  }

  return (
    <div style={container}>
      <div style={prof_pic_container}></div>
      <div style={new_tweet_container}>
        <input type="text" />
        <label className="custom-file-upload">
          <input type="file" />
        </label>
      </div>
    </div>
  )
}

export default NewTweet
