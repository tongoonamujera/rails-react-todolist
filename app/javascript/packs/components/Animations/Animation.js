import React from 'react';
import { useAnimation } from '../../CustomHooks/AnimationHook/useAnimtion';

const Animation = ({ text }) => {
  const [typed] = useAnimation(text, 300, 100);

  return (
    <>
      {typed}
    </>
  )
}

export default Animation;