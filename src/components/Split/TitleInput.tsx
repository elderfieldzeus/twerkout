import React from 'react'

interface TitleInputProps {
    handleChangeName: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
    MAX_TITLE: number;
}

const TitleInput: React.FC<TitleInputProps> = ({handleChangeName, name, MAX_TITLE}) => {
  return (
    <div className='relative'>
        <input
                type="text"
                onChange={handleChangeName}
                value={name}
                className='font-coffee text-xl w-full text-center focus:outline-none '
                placeholder='title'
            />
        <p className={`${name.length === MAX_TITLE ? "text-red-400" : "text-gray-400"} absolute bottom-0 right-0 text-xs font-bold`}>{name.length}/{MAX_TITLE}</p>
    </div>
  )
}

export default TitleInput