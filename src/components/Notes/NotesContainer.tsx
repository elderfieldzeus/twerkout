import React from 'react'
import { DocReturn } from '../../utilities/fetch';
import Note from './Note';

interface NotesContainerProps {
    notes: DocReturn[];
}

const NotesContainer: React.FC<NotesContainerProps> = ({notes}) => {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between items-center p-2 border border-black bg-yellow-400 text-sm rounded-t-xl font-coffee'>
            <p>Title</p>
            <p>Date</p>
        </div>
        {notes.map((note, i) => {
        return <Note key = {note.id} data = {note.data} last = {(i === notes.length - 1) ? true : false} handleOpenNotes = {alert} />
        })}

        {notes.length === 0 && 
        
        <div className={`w-full flex justify-center items-center p-2 border border-black bg-white rounded-b-xl`}>
            <p className='font-medium text-sm'>No notes yet.</p>
        </div>

        }
    </div>
  )
}

export default NotesContainer