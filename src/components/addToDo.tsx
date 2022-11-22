import React, { useRef } from 'react';

export const AddToDo: React.FC = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputRef);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form action='' onSubmit={handleSubmit} ref={formRef}>
      <input type='text' name='addToDo' id='addToDo' ref={inputRef} />
      <button type='submit' onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};
