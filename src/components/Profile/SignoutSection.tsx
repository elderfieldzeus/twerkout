import React from 'react'

const SignoutSection = () => {
  return (
    <div className='flex flex-col items-center font-coffee absolute bottom-60 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-3xl px-10 py-8 gap-5 border-2 border-black'>
        <p className='text-3xl '>Signout?</p>
        <div className='flex gap-5 text-xl'>
            <button className='rounded-full bg-green-400 size-12 border-2 border-black'>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default SignoutSection