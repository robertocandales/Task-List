import { useState, useRef } from 'react';
import AddingTask from './components/AddingTask';
import TaskList from './components/TaskList';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTask(newTask);
    taskInput.current?.focus();
    setNewTask('');
  };
  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };
  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };
  const handleDelete = (name: string): void => {
    setTasks(tasks.filter((t, i) => t.name !== name));
  };
  return (
    <div className='container p-4'>
      <h1 className='col-md-6 offset-md-3'>Task List</h1>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <AddingTask
              handleSubmit={handleSubmit}
              taskInput={taskInput}
              newTask={newTask}
              setNewTask={setNewTask}
            />
          </div>
          <TaskList tasks={tasks} toggleDoneTask={toggleDoneTask} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
