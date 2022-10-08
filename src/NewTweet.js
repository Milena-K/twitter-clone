import { useRef, useState, useEffect } from 'react';
import { createTweet } from './createTweet';
import ImageInput from './ImageInput';
import EmojiPicker from './EmojiPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function NewTweet() {

  const [file, setFile] = useState(null);
  const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(null);
  const fileInput = useRef(null);
  const inputRef = useRef('');

  // Functions //
  const sendTweet = async (e) => {
    const tweet = inputRef.current.value;
    // console.log("New Twt:", tweet);
    createTweet(tweet);
    console.log('Tweet is sent!')
  }
  const toggleEmojiPicker = (e) => {
    setIsOpenEmojiPicker(!isOpenEmojiPicker);
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
      <div style={prof_pic_container}>

      </div>

      <div style={new_tweet_container}>
        <input
          ref={inputRef}
          type='text'
          id='tweetInput'
          name='tweetInput'
        />
        <button onClick={sendTweet}>Send</button>

        <div
          style={{ display: "flex" }}
        >
          <ImageInput
            className="icon-on-new-tweet"
            file={file}
            setFile={setFile}
          />
          <button
            className="icon-btn"
            onClick={toggleEmojiPicker}
          >
            <FontAwesomeIcon
              className='icon-svg'
              icon={faFaceSmile} />
          </button>
        </div>
        {isOpenEmojiPicker ?
          <EmojiPicker inputRef={inputRef} /> : null
        }
      </div>
    </div>
  )
}

export default NewTweet
