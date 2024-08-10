import React, { useState } from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import AddNote from './AddNote';

const Write: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpen(true);
  }

  const handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void = () => {
    setOpen(false);
  }

  return (
    <>
      <div onClick={handleOpen} className='fixed right-5 h-12 flex justify-center items-center active:text-yellow-600'>
          <FaPenToSquare className='size-6'/>
      </div>
      {open &&
      
      <AddNote handleClose = {handleClose} />
      
      }
    </>
  )
}

export default Write