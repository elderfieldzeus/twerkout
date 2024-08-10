import React from 'react'
import CloseButton from '../CloseButton'
import Filter from '../Profile/Filter';

interface NotepadProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

const Notepad: React.FC<NotepadProps> = ({handleClose, children}) => {
    

  return (
    <Filter>
        <div className='w-72 h-96 rounded-xl border-2 border-black bg-white relative overflow-hidden'>
            <div className='w-full flex justify-end items-center p-2 bg-yellow-400 border-b-2 border-black'>
                <CloseButton handleClose = {handleClose} /> 
            </div>

            {children}

        </div>
    </Filter>
  )
}

export default Notepad