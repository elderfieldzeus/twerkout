import React from 'react'

const ProfilePicture: React.FC = () => {
  return (
    <div className='flex justify-center my-6'>
        <div className='rounded-full border-2 border-black p-5 bg-yellow-400 shadow-xl'>
        <img className='size-48' src="../../images/profile.png" alt="Profile Picture" />
        </div>
    </div>
  )
}

export default ProfilePicture