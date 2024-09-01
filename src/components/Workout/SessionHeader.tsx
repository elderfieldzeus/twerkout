import React from 'react'

interface SessionHeaderProps {
    name: string;
}

const SessionHeader: React.FC<SessionHeaderProps> = ({name}) => {
  return (
    <div className='flex flex-col w-full items-center'>
        <p className='font-coffee text-xl'>Today is...</p>
        <p className='font-coffee text-5xl'>{name} day!</p>
    </div>
  )
}

export default SessionHeader