import React from 'react'

const CurrentSplitContent: React.FC = () => {
  return (
    <div className='w-full'>
          <p className='font-coffee text-xl w-full text-center'>PUSH PULL LEGS</p>

          <hr className='my-3 border' />
          
          <p className='font-coffee'>PUSH</p>
          <ul className='text-sm font-medium list-disc px-6 grid grid-cols-2 gap-6'>
              <li>Bench Press</li>
              <li>Kevin Durant</li>
          </ul>

          <hr className='my-3 border' />
          
          <p className='font-coffee'>PULL</p>
          <ul className='text-sm font-medium list-disc px-6'>
              <li>Lat Pulldown</li>
          </ul>
          
          <hr className='my-3 border' />
          
          <p className='font-coffee'>LEGS</p>
          <ul className='text-sm font-medium list-disc px-6'>
              <li>Leg Press</li>
          </ul>

    </div>
  )
}

export default CurrentSplitContent