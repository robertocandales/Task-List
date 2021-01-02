import React from 'react';

interface ITask {
  name: string;
  done: boolean;
}

interface Props {
  tasks: ITask[];
  toggleDoneTask: (i: number) => void;
  handleDelete: (name: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, toggleDoneTask, handleDelete }) => {
  return (
    <>
      {tasks.map((t: ITask, i: number) => (
        <div key={i} className='card card-body mt-2'>
          <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</h2>
          <div>
            <button className='btn btn-secondary' onClick={() => toggleDoneTask(i)}>
              {t.done ? '✓' : '✗'}
            </button>
            <button className='btn btn-secondary ml-2' onClick={() => handleDelete(t.name)}>
              🗑
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;
