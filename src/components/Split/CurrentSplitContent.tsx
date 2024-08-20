import React from 'react'
import Day from './Day'
import HorizontalBar from '../HorizontalBar';

const CurrentSplitContent: React.FC = () => {
  return (
    <div className='w-full'>
          <p className='font-coffee text-xl w-full text-center'>PUSH PULL LEGS</p>

          <HorizontalBar />
          
          <Day
            title='Push'
            workouts={['Bench Press', 'Kevin Durant']}
          />

          <HorizontalBar />
          
          <Day
            title='Pull'
            workouts={['Lat Pulldown']}
          />
          
          <HorizontalBar />
          
          <Day
            title='Legs'
            workouts={['Leg Press']}
          />

    </div>
  )
}

export default CurrentSplitContent;