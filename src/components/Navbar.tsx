import React from 'react';
import MainButton from './Navbar/MainButton';
import SideButton from './Navbar/SideButton';
import { SiActigraph } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FaChartBar } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';

const Navbar: React.FC = () => {
  return (
    <div className='fixed bottom-0 w-full h-16 bg-yellow-400 bg-opacity-40 border-t-2 border-black rounded-t-lg shadow-lg flex justify-between px-6'>
        <MainButton />

        <div className='flex gap-9'>
          <SideButton Icon = {SiActigraph} label='Split'/>
          <SideButton Icon = {FaChartBar} label='Progress'/>
        </div>

        <div className='flex gap-9'>
          <SideButton Icon = {GrNotes} label='Notes'/>
          <SideButton Icon = {CgProfile} label='Profile'/>
        </div>
    </div>
  )
}

export default Navbar