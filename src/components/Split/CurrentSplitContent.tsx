import React from 'react'
import Day from './Day'
import HorizontalBar from '../HorizontalBar';
import { Split } from '../../pages/Split/NewSplit';

interface CurrentSplitContentProps {
  split: Split;
}

const CurrentSplitContent: React.FC<CurrentSplitContentProps> = ({split}) => {
  return (
    <div className='w-full'>
          <p className={`font-coffee text-xl w-full text-center ${split.name || 'text-gray-400'}`}>{split.name ? split.name : 'NO SPLIT YET'}</p>

          {split.days.map((day, index) => {
            return (
              <div key = {index}>
                <HorizontalBar />
                <Day
                  title={day.name}
                  exercises={day.exercises}
                />
              </div>
            );
          })}
    </div>
  )
}

export default CurrentSplitContent;