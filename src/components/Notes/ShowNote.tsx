import React from 'react'
import DeleteButton from '../DeleteButton';

interface ShowNoteProps {
    title: string;
    content: string;
    handleDeleteNotes: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowNote: React.FC<ShowNoteProps> = ({title, content, handleDeleteNotes}) => {

    return (
        <div>
            <p className='w-[calc(100%-1rem)] outline-none m-2 p-1 border-b-2 font-medium rounded-none'> {title} </p>

            <p className='w-[calc(100%-1rem)] h-1/2 outline-none m-2 p-1 font-medium rounded-md'> {content} </p>

            <div className='absolute bottom-7 left-1/2 -translate-x-1/2'>
                <DeleteButton handleDeleteNotes = {handleDeleteNotes} />
            </div>

        </div>
    )
}

export default ShowNote