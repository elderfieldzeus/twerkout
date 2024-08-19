import React from 'react'
import Day from './Day'

const CurrentSplitContent: React.FC = () => {
  return (
    <div className='w-full'>
          <p className='font-coffee text-xl w-full text-center'>PUSH PULL LEGS</p>

          <hr className='mt-1 mb-4 border' />
          
          <Day
            title='Push'
            workouts={['Bench Press', 'Kevin Durant']}
          />

          <hr className='mt-1 mb-4 border' />
          
          <Day
            title='Pull'
            workouts={['Lat Pulldown']}
          />
          
          <hr className='mt-1 mb-4 border' />
          
          <Day
            title='Legs'
            workouts={['Leg Press']}
          />

    </div>
  )
}

export default CurrentSplitContent;