import { useRef, useState } from 'react';
import { createTweet } from './createTweet';
import ImageInput from './ImageInput';

function NewTweet() {

  const [file, setFile] = useState(null)
  const fileInput = useRef(null);

  // Functions //
  const sendTweet = async (e) => {
    e.preventDefault();
    const tweet = e.target.form[1].value;
    // console.log("New Twt:", tweet);
    createTweet(tweet);
  }

  // Styles //
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

  // Components //
  return (
    <div>
      <div style={prof_pic_container}></div>
      <div style={new_tweet_container}>
        <ImageInput file={file} setFile={setFile} />
        {console.log(file)}
      </div>
    </div>
  )
}

export default NewTweet
