import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';


interface MainProps {
    children?: React.ReactNode;
    header: string;
}

const Main: React.FC<MainProps> = ({children, header}) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user) {
        navigate('/');
      }
    })
  }, []);

  return (
    <div className='w-full min-h-screen bg-white relative'>
        <Navbar />
        <p className='font-coffee flex items-center text-2xl fixed top-0 h-14 px-5 w-full bg-white'>{header}</p>
        <main className='py-16 px-5'>
            {children}
        </main>
    </div>
  )
}

export default Main