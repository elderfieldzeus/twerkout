import React, { useState } from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import AddNote from './AddNote';

interface WriteProps {
  noteCount: number;
}

const Write: React.FC<WriteProps> = ({noteCount}) => {
  const MAX_NOTES = 10;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
    if(noteCount === MAX_NOTES) {
      alert(`Sorry you can only have ${MAX_NOTES} at a time.`);
      return;
    }
    
    setOpen(true);
  }

  const handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void = () => {
    setOpen(false);
  }

  return (
    <>
      <div onClick={handleOpen} className='fixed right-5 h-12 flex justify-center items-center active:text-yellow-600 hover:cursor-pointer'>
          <FaPenToSquare className='size-6'/>
      </div>
      {open &&
      
      <AddNote handleClose = {handleClose} />
      
      }
    </>
  )
}

export default Write