import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='mt-8 grid grid-cols-1
    md:grid-cols-2 gap-6 w-full max-w-4xl shadow-lg rounded-2xl p-6'>

      {/* Original Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
          Original Image
        </h2>

        {props.uploadedImage ? (
          <img
            src={props.uploadedImage}
            alt=""
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='flex items-center justify-center h-80 text-gray-700'>No Image Selected</div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Enhanced Image</h2>

        {props.loading ? (
          <Loading></Loading>
        ) : props.enhancedImage ? (
          <img
            src={props.enhancedImage}
            alt=""
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='flex items-center justify-center h-80 text-gray-700'>Image yet to be Uploaded.</div>
        )}
      </div>

    </div>
  )
}

export default ImagePreview;