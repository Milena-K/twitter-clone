import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
// import { Emoji, Theme } from 'emoji-picker-react';

const EmojiPicker = ({ inputRef }) => {

  const [chosenEmoji, setChosenEmoji] = useState(null)

  const onEmojiClick = (event, emojiObject) => {
    const emojiObj = {
      ...emojiObject,
      symbol: "0x" + emojiObject.unified
    }
    setChosenEmoji(emojiObj);
    inputRef.current.value = inputRef.current.value + emojiObj.emoji
  };



  return (
    <div>
      <Picker
        onEmojiClick={onEmojiClick}
      /* theme={Theme.DARK} */
      />
      {/* <Emoji unified='1f423' /> */}
    </div>
  );
};

export default EmojiPicker;
