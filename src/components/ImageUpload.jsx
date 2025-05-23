import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 hover:border-blue-500 transition-all duration-200'>
            <span className='text-gray-600'>Click Or Drag your image here.</span>
            <input type="file" id="fileInput" accept="image/*" className='hidden' />
        </label>
    </div>
  )
}

export default ImageUpload