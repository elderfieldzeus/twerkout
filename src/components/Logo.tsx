import React from "react";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({className}) => {
    return (
        <div className = {className}>
            <img src="/images/duck-twerk.gif" alt="Logo" />
        </div>
    )
}

export default Logo;