import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';


interface MainProps {
    children?: React.ReactNode;
    header: string;
    Extra?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({children, header, Extra}) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user) {
        navigate('/');
      }
    })
  }, [navigate]);

  return (
    <div className='w-full min-h-screen bg-white relative'>
        <Navbar />
        <p className='font-coffee flex items-center text-2xl fixed top-0 h-14 px-5 w-full bg-white'>{header}</p>
        {Extra}
        <main className='py-16 px-5 w-full h-full'>
            {children}
        </main>
    </div>
  )
}

export default Main