import React from 'react';

interface Props {
  EdithandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  taskInput: React.Ref<HTMLInputElement>;
  newTask: string;
  setNewTask: (name: string) => void;
}

const EditTask: React.FC<Props> = ({ EdithandleSubmit, taskInput, newTask, setNewTask }) => {
  return (
    <div className='card-body'>
      <form onSubmit={EdithandleSubmit}>
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

export default EditTask;
