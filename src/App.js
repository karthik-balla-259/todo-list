
import './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = (event) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, 
      taskName: newTask,
      checked: false
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (taskId) => {
    const newTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(newTodoList);
  };

  const onStatusChange = (taskId, inputChecked) => {
    if (!inputChecked) {
      setTodoList(todoList.map((task) => {
        return task.id === taskId ? {...task, checked: true} : {...task};
      }));
    }
    if (inputChecked) {
      setTodoList(todoList.map((task) => {
        return task.id === taskId ? {...task, checked: false} : {...task};
      }));
    }

  };

  return (
    <div className="App">
      <h1 className='heading'>Todos</h1>
      <div className="add-task-container">
        <h2 className='heading2'>Create Task</h2>
        <input 
          className='user-input'
          type='text' 
          placeholder='What needs to be done?'
          onChange={handleChange} />
        <div className='btn-container'><button className='btn' onClick={addTask}>Add Task</button></div>
      </div>
      <div className='todoListContainer'>
        <h2 className='heading2'>Tasks</h2>
        {todoList.map((task) => {
          return (
            <Task 
              taskName={task.taskName} id={task.id} checked={task.checked} onStatusChange={onStatusChange} deleteTask={deleteTask} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
