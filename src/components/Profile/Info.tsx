import React from 'react'
import Inline from '../Inline'

interface InfoProps {
    header: string;
    data: string;
} 

const Info: React.FC<InfoProps> = ({header, data}) => {
  return (
    <Inline className='font-coffee'>
        <h1>{header}:</h1>
        <p className='text-gray-400'>{data}</p>
    </Inline>
  )
}

export default Info