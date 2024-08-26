import todoList from './todoList';
todoList.addProject('basketball');

const DOMHandler = (() => {
  const renderTodos = () => {
    const container = document.querySelector('.container');
    todoList.getTodos().forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.textContent = todo.title;
      todoItem.classList.add('todo-item');
      container.appendChild(todoItem);
    });
  };

  return { renderTodos };
})();

export default DOMHandler;
