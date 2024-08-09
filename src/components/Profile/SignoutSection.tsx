import React from 'react'
import SignoutButton from './YesOrNoButton'
import { useNavigate } from 'react-router-dom'

const SignoutSection: React.FC = () => {
    const navigate = useNavigate();
    const signout: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate('/');
    }

  return (
    <div className='flex justify-center my-16'>
        <div className='flex flex-col items-center font-coffee bg-yellow-400 rounded-[2.5rem] px-10 py-6 gap-2 border-2 border-black shadow-xl'>
            <p className='text-3xl '>Signout?</p>
            <div className='flex gap-5 text-xl'>
                <SignoutButton handleOnClick={signout} type='red' label='YES' />
            </div>
        </div>
    </div>
  )
}

export default SignoutSection