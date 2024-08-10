import React from 'react'
import { DocumentData } from 'firebase/firestore';

interface NoteProps {
    data: DocumentData;
    last: boolean;
    handleOpenNotes?: React.MouseEventHandler<HTMLDivElement>
}

const Note: React.FC<NoteProps> = ({data, last, handleOpenNotes}) => {

  return (
    <div onClick={handleOpenNotes} className={`w-full flex justify-between items-center p-2 border border-black bg-[#fdeba1] active:bg-yellow-300 transition-all hover:cursor-pointer ${last === true ? 'rounded-b-xl' : ''}`}>
        <p className='font-medium text-sm'>{data.title}</p>
        <p className='text-xs'>{data.createdAt.toDate().toLocaleDateString()}</p>
    </div>
  )
}

export default Note