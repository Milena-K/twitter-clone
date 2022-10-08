import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const ImageInput = ({ file, setFile }) => {


  const onChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const fileInput = useRef(null);


  return (
    <div>
      <input
        type='file'
        name='image'
        ref={fileInput}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <button
        className='icon-btn'
        onClick={() => fileInput.current.click()}
      >
        <FontAwesomeIcon
          className='icon-svg'
          icon={faImage} />
      </button>
    </div>
  )
}

export default ImageInput;
