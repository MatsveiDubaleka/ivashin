import React from 'react';

const handleSubmit = (event: React.FormEvent) => {
  console.log(event.target);
};

const handleClick = (event: React.MouseEvent) => {
  console.log(event.target);
};

export const addToDo: React.FC = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='addToDo' id='addToDo' />
      <button type='submit' onClick={handleClick}></button>
    </form>
  );
};
