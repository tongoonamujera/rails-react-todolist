import { useEffect, useState } from "react";

export const useAnimation = (text, typingSpeed, deletingSpeed) => {
  const word = text;
  const [typed, setTyped] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      setTimeout(() => {
        setTyped(word.slice(0, typed.length + 1))
        if (typed.length === word.length)
          setTyping(!typing)
      }, typingSpeed)
    } else {
      setTimeout(() => {
        setTyped(typed.slice(0, typed.length - 1))
        if (typed.length === 0)
          setTyping(!typing)
      }, deletingSpeed)
    }
  }, [typed, typing])

  return [typed];
}