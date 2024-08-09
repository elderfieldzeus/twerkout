import React from 'react'
import Info from './Info'

const InfoSection: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <Info header="email" data="rooster@gmail.com" />
        <Info header="date joined" data="08-09-2024" />
        <Info header="no. of workouts" data="0" />
    </div>
  )
}

export default InfoSection