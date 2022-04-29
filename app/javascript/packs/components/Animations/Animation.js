import React from 'react';
import { useAnimation } from '../../CustomHooks/AnimationHook/useAnimtion';

const Animation = ({ text }) => {
  const [type] = useAnimation(text, 300, 100);

  return (
    <>
      {type}
    </>
  )
}

export default Animation;