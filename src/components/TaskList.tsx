import React from 'react';

interface ITask {
  name: string;
  done: boolean;
}

interface Props {
  tasks: ITask[];
  toggleDoneTask: (i: number) => void;
  handleDelete: (name: string) => void;
  handleEdit: (name: string, index: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, toggleDoneTask, handleDelete, handleEdit }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className='card mt-2'>
      {tasks.map((t: ITask, i: number) => (
        <div key={i} className=' card-body mt-2'>
          <div className='card text-white bg-success mb-3' style={{ width: '20rem' }}>
            <div
              className='card-header'
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 className=''>Task #{i + 1} </h4>

              <div>
                <button className='btn btn-success' onClick={() => toggleDoneTask(i)}>
                  {t.done ? '✓' : '✗'}
                </button>
                <button className='btn btn-success ml-2' onClick={() => handleEdit(t.name, i)}>
                  ✎
                </button>
                <button className='btn btn-success ml-2' onClick={() => handleDelete(t.name)}>
                  🗑
                </button>
              </div>
            </div>
            <div className='card-body'>
              <h5 className='card-title'> {t.done ? 'Completed task' : 'Unfinished task'} </h5>
              <p className='card-text' style={{ textDecoration: t.done ? 'line-through' : '' }}>
                {t.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
