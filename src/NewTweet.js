import { useRef, useState, useEffect } from 'react';
import { createTweet } from './createTweet';
import ImageInput from './ImageInput';
import EmojiPicker from './EmojiPicker';
import ProfilePic from './ProfilePic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

import './styles/NewTweet.css';

function NewTweet() {

  const [file, setFile] = useState(null);
  const [isOpenEmojiPicker, setIsOpenEmojiPicker] = useState(null);
  const inputRef = useRef('');
  const emojiPickerRef = useRef(null);
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
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        !emojiBtnRef.current.contains(event.target)
      )
        setIsOpenEmojiPicker(false)
    }
    document.addEventListener('click', handleClickOutside, true);
  });

  // Components //
  return (
    <div >
      <p className='page-title'>Home</p>
      <div id='newTweet1'>
        <div className='profilePicContainer'>
          <ProfilePic />
        </div>

        <div id='newTweetContainer1'>
          <div id='newTweet'>
            <input
              autoComplete='off'
              ref={inputRef}
              type='text'
              placeholder="What's happening?"
              id='tweetInput'
              name='tweetInput'
            />
          </div>
          {/* <hr /> */}
          {/* Buttons */}
          <div id='btnsNewTweet' >
            <div id='btnsImageEmoji'>
              <ImageInput
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
            <div id='sendTweet'>
              <button
                id='btnSendTweet'
                onClick={sendTweet}>Tweet</button>
            </div>
          </div>
          {/* EmojiPicker */}
          <div ref={emojiPickerRef}>
            {isOpenEmojiPicker ?
              <EmojiPicker
                inputRef={inputRef} />
              : null
            }
          </div>
        </div >
      </div >
    </div>
  )
}

export default NewTweet
