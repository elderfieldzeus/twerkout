import React from 'react'

interface HorizontalBarProps {
  className?: string;
}

const HorizontalBar: React.FC<HorizontalBarProps> = ({className}) => {
  return (
    <hr className={`mt-1 mb-4 border-t-2 ${className}`} />
  )
}

export default HorizontalBar;