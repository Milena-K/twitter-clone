import { useRef, useState } from 'react';
import { ReactComponent as ImageSVG } from './img/image-svgrepo-com.svg';

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
        <ImageSVG className='image-svg' id='imageSVG' />
        {/* <FontAwesomeIcon */}
        {/*   className='icon-svg' */}
        {/*   icon={faImage} /> */}
      </button>
    </div>
  )
}

export default ImageInput;
