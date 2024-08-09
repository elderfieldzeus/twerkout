import React from 'react'

interface SideButtonProps {
    Icon: React.ElementType;
    label: string;
}

const SideButton: React.FC<SideButtonProps> = ({Icon, label}) => {
  return (
    <button className='h-full flex flex-col text-black pt-3 justify-start items-center font-coffee active:text-yellow-600 transition-all w-10 gap-1'>
        <Icon className='size-6'/>
        <p className='text-xs'>{label}</p>
    </button>
  )
}

export default SideButton