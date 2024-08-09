import React from 'react'
import {Helmet} from 'react-helmet'

interface HeaderProps {
  white?: boolean;
}

const Header: React.FC<HeaderProps> = ({white = true}) => {
  return (
    <div>
      <Helmet>
        <style>
          {`
            body {
              background-color: ${white ? "white" : "#facc15"} ;
            }
          `}
        </style>
      </Helmet>
    </div>
  )
}

export default Header