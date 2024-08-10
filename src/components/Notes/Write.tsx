import React, { useState } from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import Notepad from './Notepad';

const Write: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpen(true);
  }

  const handleClose: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(false);
  }

  return (
    <>
      <div onClick={handleOpen} className='fixed right-5 h-12 flex justify-center items-center active:text-yellow-600'>
          <FaPenToSquare className='size-6'/>
      </div>
      {open &&
      
      <Notepad handleClose = {handleClose} />
      
      }
    </>
  )
}

export default Write