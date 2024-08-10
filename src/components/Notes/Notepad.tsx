import React, { useState } from 'react'
import CloseButton from '../CloseButton'
import Filter from '../Profile/Filter';
import CheckButton from '../CheckButton';

interface NotepadProps {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
}

const Notepad: React.FC<NotepadProps> = ({handleClose}) => {
    const TITLE_MAX_COUNT = 24;
    const CONTENT_MAX_COUNT = 180;
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [textCount, setCount] = useState<number>(0);  

    const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.value.length <= TITLE_MAX_COUNT) {
            setTitle(e.target.value);
        }
    }

    const handleChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if(e.target.value.length <= CONTENT_MAX_COUNT) {
            setCount(e.target.value.length)
            setContent(e.target.value);
        }
    }

  return (
    <Filter>
        <div className='w-72 h-96 rounded-xl border-2 border-black bg-white relative overflow-hidden'>
            <div className='w-full flex justify-end items-center p-2 bg-yellow-400 border-b-2 border-black'>
                <CloseButton handleClose = {handleClose} /> 
            </div>

            <input 
                type="text" 
                className='w-[calc(100%-1rem)] outline-none m-2 p-1 border-b-2 font-medium' 
                placeholder='Title' 
                value={title} 
                onChange={handleChangeTitle}/>

            <div className='w-[calc(100%-1rem)] h-1/2 relative'>
                <textarea 
                    value={content} 
                    onChange={handleChangeContent} 
                    className='w-full h-full outline-none m-2 p-1 font-medium rounded-md resize-none' 
                    placeholder='Your notes here...'
                ></textarea>

                <p className={`${textCount === CONTENT_MAX_COUNT ? "text-red-400" : "text-gray-400"} text-xs font-bold 
                absolute bottom-0 right-0`}>{textCount}/{CONTENT_MAX_COUNT}</p>
            </div>
            

            <div className='absolute bottom-7 left-1/2 -translate-x-1/2'>
                <CheckButton handleCheck = {alert} />
            </div>

        </div>
    </Filter>
  )
}

export default Notepad