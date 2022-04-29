import React, { useEffect, useState } from 'react';
import { useAnimation } from '../../CustomHooks/AnimationHook/useAnimtion';

const Animation = ({ text }) => {
  const [typed] = useAnimation(text, 300, 100);
  // const word = text;
  // const [typed, setTyped] = useState('');
  // const [typing, setTyping] = useState(true);

  // useEffect(() => {
  //   if (typing) {
  //     setTimeout(() => {
  //       setTyped(word.slice(0, typed.length + 1))
  //       if (typed.length === word.length)
  //         setTyping(false)
  //     }, 300)
  //   } else {
  //     setTimeout(() => {
  //       setTyped(typed.slice(0, typed.length - 1))
  //       if (typed.length === 0)
  //         setTyping(true)
  //     }, 100)
  //   }
  // }, [typed, typing])

  return (
    <>
      {typed}
    </>
  )
}

export default Animation;