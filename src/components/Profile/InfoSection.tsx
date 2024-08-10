import React, { useEffect, useState } from 'react'
import Info from './Info'
import { User } from 'firebase/auth'

interface InfoSectionProps {
  user: User | null;
}

const InfoSection: React.FC<InfoSectionProps> = ({user}) => {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    if(user && user.metadata.creationTime) {
      const tempDate = new Date(user.metadata.creationTime).toLocaleDateString();
      setDate(tempDate);
    }
  }, [user]);

  return (
    <div className='flex flex-col items-center'>
        <Info header="email" data={user && user.email ? user.email : ''} />
        <Info header="date joined" data={user && user.metadata.creationTime ? date : ''} />
        <Info header="no. of workouts" data="0" />
    </div>
  )
}

export default InfoSection