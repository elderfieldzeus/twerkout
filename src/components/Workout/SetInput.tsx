import React from 'react'

interface SetInputProps {
    value: number | string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    unit: string;
}

const SetInput: React.FC<SetInputProps> = ({value, handleChange, unit}) => {
  return (
        <div className='relative'>
            <p className='absolute right-2 top-1/2 -translate-y-1/2 font-coffee text-[0.5rem] text-start'>{unit}</p>
            <input
                placeholder='0'
                type="text"
                className="border-2 border-black w-full rounded-lg pl-2 pr-8 py-1 text-end font-medium"
                value = {value.toString()}
                onChange = {handleChange}
            />  
        </div>
  )
}

export default SetInput