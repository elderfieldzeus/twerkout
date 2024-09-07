import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'

interface DeleteSetButtonProps {
    handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteSetButton: React.FC<DeleteSetButtonProps> = ({handleDelete}) => {
  return (
    <button onClick={handleDelete}>
        <MdOutlineDelete className='size-4 text-red-400'/>
    </button>
  )
}

export default DeleteSetButton