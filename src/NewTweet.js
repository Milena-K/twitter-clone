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
  const EmojiPickerRef = useRef(null);
  const emojiBtnRef = useRef(null);


  // Functions //
  const sendTweet = async (e) => {
    const tweet = inputRef.current.value;
    createTweet(tweet);
    console.log('Tweet is sent!')
  }
  const toggleEmojiPicker = () => {
    setIsOpenEmojiPicker(!isOpenEmojiPicker);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        EmojiPickerRef.current &&
        !EmojiPickerRef.current.contains(event.target) &&
        !emojiBtnRef.current.contains(event.target)
      )
        setIsOpenEmojiPicker(false)
    }
    document.addEventListener('click', handleClickOutside, true);
  });



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

      <div
        style={new_tweet_container}>
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
            ref={emojiBtnRef}
            className="icon-btn"
            id='emojiBtn'
            onClick={toggleEmojiPicker}
          >
            <FontAwesomeIcon
              className='icon-svg'
              icon={faFaceSmile} />
          </button>
        </div>

        <div ref={EmojiPickerRef}>
          {isOpenEmojiPicker ?
            <EmojiPicker
              inputRef={inputRef} />
            : null
          }
        </div>
      </div>
    </div >
  )
}

export default NewTweet
