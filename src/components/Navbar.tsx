import React from 'react';
import MainButton from './Navbar/MainButton';
import SideButton from './Navbar/SideButton';
import { SiActigraph } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FaChartBar } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const goto = (url: string): React.MouseEventHandler<HTMLButtonElement> => () => {
    navigate(`/${url}`);
  }

  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%+0.3rem)] h-16 bg-yellow-400 bg-opacity-40 border-t-2 border-black rounded-t-lg shadow-lg flex justify-between px-6'>
        <MainButton handleOnClick={goto('gym')}/>

        <div className='flex gap-9'>
          <SideButton Icon = {SiActigraph} label='Split' handleOnClick={goto('split')}/>
          <SideButton Icon = {FaChartBar} label='Progress' handleOnClick={goto('progress')}/>
        </div>

        <div className='flex gap-9'>
          <SideButton Icon = {GrNotes} label='Notes' handleOnClick={goto('notes')}/>
          <SideButton Icon = {CgProfile} label='Profile' handleOnClick={goto('profile')}/>
        </div>
    </div>
  )
}

export default Navbar