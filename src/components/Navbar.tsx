import React from 'react';
import MainButton from './Navbar/MainButton';

const Navbar: React.FC = () => {
  return (
    <div className='fixed bottom-0 w-full h-24 bg-yellow-400 rounded-t-xl shadow-lg'>
        <MainButton />
    </div>
  )
}

export default Navbar