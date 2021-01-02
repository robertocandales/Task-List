import { useState, useRef } from 'react';
import AddingTask from './components/AddingTask';
import EditTask from './components/EditTask';
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
  const [editTask, setEditTask] = useState<boolean>(false);
  const [indexPosition, setIndexPosition] = useState<number>(0);

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

  //Edit task//
  const handleEdit = (name: string, index: number): void => {
    setNewTask(name);
    setEditTask(true);
    setIndexPosition(index);
  };
  const EdithandleSubmit = (e: FormElement) => {
    e.preventDefault();
    EditOneTask(newTask, indexPosition);
    taskInput.current?.focus();
    setNewTask('');
  };
  const EditOneTask = (nameEdited: string, index: number): void => {
    const editTask: ITask[] = tasks.map((t: ITask, i: number) => {
      if (index === i) {
        return { name: nameEdited, done: t.done };
      } else {
        return t;
      }
    });
    setTasks(editTask);
    setEditTask(false);
  };
  return (
    <div className='container p-4'>
      <h1 style={{ textAlign: 'center' }}>Task List</h1>
      <div className='row'>
        <div className='col-md-12 '>
          <div className='card'>
            {!editTask ? (
              <AddingTask
                handleSubmit={handleSubmit}
                taskInput={taskInput}
                newTask={newTask}
                setNewTask={setNewTask}
              />
            ) : (
              <EditTask
                EdithandleSubmit={EdithandleSubmit}
                taskInput={taskInput}
                newTask={newTask}
                setNewTask={setNewTask}
              />
            )}
          </div>
          <TaskList
            tasks={tasks}
            toggleDoneTask={toggleDoneTask}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
