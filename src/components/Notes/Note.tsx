import React from 'react'
import { DocumentData } from 'firebase/firestore';
import ShowNote from './ShowNote';
import { deleteNote } from '../../utilities/delete';

interface NoteProps {
    id: string;
    data: DocumentData;
    last: boolean;
    openNotepad: () => void;
    changeContent: (Content: React.ReactNode) => void;
    handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Note: React.FC<NoteProps> = ({id, data, last, openNotepad, changeContent, handleClose}) => {
  const handleDeleteNotes: React.MouseEventHandler<HTMLButtonElement> = () => {
    deleteNote(id);
    handleClose();
  }
  
  const handleOpenNotes: React.MouseEventHandler<HTMLDivElement> = () => {
    openNotepad();
    changeContent(
      <ShowNote 
        title = {data.title}
        content = {data.content}
        handleDeleteNotes = {handleDeleteNotes}
      />
    );
  } 

  return (
    <div onClick={handleOpenNotes} className={`w-full flex justify-between items-center p-2 border border-black bg-white shadow-xl active:bg-yellow-300 transition-all hover:cursor-pointer ${last === true ? 'rounded-b-xl' : ''}`}>
        <p className='font-medium text-sm'>{data.title}</p>
        <p className='font-medium text-xs'>{data.createdAt.toDate().toLocaleDateString()}</p>
    </div>
  )
}

export default Note