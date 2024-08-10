import React from 'react'
import Logo from '../Logo';
import { FcGoogle } from 'react-icons/fc';

interface GoogleLoginProps {
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>
    loading?: boolean;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({handleOnClick, loading}) => {
  return (
    <button onClick={handleOnClick} className="bg-gray-100 w-full h-12 rounded-lg text-gray-500 text-md active:bg-gray-200 flex items-center justify-center gap-2" disabled = {loading ? true : false}>
        {loading ? <Logo className='size-5 flex w-full justify-center' /> : 
        <>
            <FcGoogle className='size-8' />
            <p>Continue with Google</p>
        </>
        }
    </button>
  )
}

export default GoogleLogin;