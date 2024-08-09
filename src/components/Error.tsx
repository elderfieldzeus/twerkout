import React from 'react'

const Error: React.FC<{message: string}> = ({message}) => {
  return (
    <div className='w-full bg-red-400 py-3 rounded-md flex justify-center text-sm text-white'>
        <p>ERROR: {message}</p>
    </div>
  )
}

export default Error