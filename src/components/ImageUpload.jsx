import React from 'react'

const ImageUpload = (props) => {

  const showImage = (e) => {
    const file = e.target.files[0];
    // Check if a file is selected and if it's an image
    if (file) {
      props.handleImageUpload(file);
    } else {
      alert("Please select an image file.");
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full'>
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 hover:border-blue-500 transition-all duration-200'>
        <span className='text-gray-600'>
          Click Or Drag your image here.
        </span>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className='hidden'
          onChange={showImage}
        />
      </label>
    </div>
  )
}

export default ImageUpload