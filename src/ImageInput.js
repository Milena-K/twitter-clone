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

  const upload_btn = {
    background: "transparent",
    border: "0px",
    color: "blue",
    marginTop: "15%",
  }

  return (
    <div className="divv">
      <input
        type='file'
        name='image'
        ref={fileInput}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <button
        style={upload_btn}
        onClick={() => fileInput.current.click()}
      ><FontAwesomeIcon icon={faImage} /></button>
    </div>
  )
}

export default ImageInput;
