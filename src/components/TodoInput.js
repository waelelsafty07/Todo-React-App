const TodoInput = ({ handleInputChange, inputValue, handleKeyDown }) => (
  <div className="to-do-list-input">
    <input
      className=" add-todo"
      type="text"
      value={inputValue}
      placeholder="Add new task"
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  </div>
);

export default TodoInput;
