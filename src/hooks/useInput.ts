import { Dispatch, useState } from 'react';

const useInput = <T>(
  initialValue: T
): [T, Dispatch<T>, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [input, setInput] = useState(initialValue);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value as unknown as T);
  };

  return [input, setInput, handleInput];
};

export default useInput;
