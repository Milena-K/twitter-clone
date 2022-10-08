import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
// import { Emoji, Theme } from 'emoji-picker-react';

const EmojiPicker = ({ inputRef }) => {

  const onEmojiClick = (event, emojiObject) => {
    const emojiObj = {
      ...emojiObject,
      symbol: "0x" + emojiObject.unified
    }
    inputRef.current.value = inputRef.current.value + emojiObj.emoji
  };

  return (
    <Picker
      onEmojiClick={onEmojiClick}
    /* theme={Theme.DARK} */
    />
  );
};

export default EmojiPicker;
