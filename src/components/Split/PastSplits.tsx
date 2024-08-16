import React from 'react'
import ArchivedSplit from './ArchivedSplit'

const PastSplits: React.FC = () => {
  return (
    <div className='mt-8'>
        <p className='font-coffee'>Previous splits</p>
        <div className='grid grid-cols-2 w-full gap-5 my-4'>
            <ArchivedSplit />
            <ArchivedSplit />
            <ArchivedSplit />
            <ArchivedSplit />
        </div>  
    </div>
  )
}

export default PastSplits