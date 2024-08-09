import React, { useEffect } from 'react'
import Main from '../components/Main';

interface GymProps {
    setColor: () => void;
}

const Gym: React.FC<GymProps> = ({setColor}) => {
    useEffect(() => {
        setColor();
    }, [])

  return (
    <Main header='Workout'>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>


        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>


        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>

        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p><p>meow</p>
        <p>meow</p>
    </Main>
  )
}

export default Gym