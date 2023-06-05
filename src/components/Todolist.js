import { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [taskId, setTaskId] = useState(0);
  const [editing, setEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: taskId,
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
      setTaskId(taskId + 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks([updatedTasks]);
  };

  const handleDeleteAllTask = () => {
    setTasks([]);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editTaskId) {
        return { ...task, text: editTaskText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskText('');
  };

  const handleUpdateKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleUpdateTask();
      setEditing(false);
    }
  };
  return (
    <>
      <section className="to-do-list-section">
        <div className="container">
          <Header />
          <div className="add-todo">
            <TodoInput
              handleInputChange={handleInputChange}
              inputValue={inputValue}
              handleKeyDown={handleKeyDown}
            />
          </div>
          <div className="to-do-list">
            <ul className="unordered-list">
              {tasks.map((task) => (
                <li key={task.id} className="to-do-list-item">
                  <label htmlFor={`checkbox-${task.id}`} style={viewMode}>
                    <input
                      type="checkbox"
                      id={`checkbox-${task.id}`}
                      defaultChecked={task.completed}
                      onClick={() => handleCompleteTask(task.id)}
                    />

                    <span className={task.completed ? 'completed' : ''}>
                      {task.text}
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={task.text}
                    className="edit-todo"
                    style={editMode}
                    onChange={(e) => handleEditTask(task.id, e.target.value)}
                    onKeyDown={handleUpdateKeyDown}
                  />
                  <div className="group-btn">
                    <button type="submit" onClick={handleEditing}>
                      Edit
                    </button>
                    <button
                      type="submit"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="to-do-list-footer">
            <button
              onClick={handleDeleteAllTask}
              type="button"
              className="btn-clear"
            >
              Clear all completed
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todolist;
