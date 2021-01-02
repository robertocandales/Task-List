import React from 'react';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  taskInput: React.Ref<HTMLInputElement>;
  newTask: string;
  setNewTask: (name: string) => void;
}

const AddingTask: React.FC<Props> = ({ handleSubmit, taskInput, newTask, setNewTask }) => {
  return (
    <div className='card-body'>
      <form onSubmit={handleSubmit}>
        <input
          ref={taskInput}
          type='text'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className='form-control'
          autoFocus
        />
        <button className='btn btn-success btn-block mt-2'>Save</button>
      </form>
    </div>
  );
};

export default AddingTask;
