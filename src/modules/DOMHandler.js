import todoList from './todoList';

const DOMHandler = (() => {
  const container = document.querySelector('.container');
  const renderTodos = () => {
    container.innerHTML = '';
    todoList.getTodos().forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.innerHTML = `
        <span> ${todo.title} </span>
        <span> ${todo.priority} </span>
        <span> ${todo.dueDate} </span>
      `;
      todoItem.classList.add('todo-item');
      container.appendChild(todoItem);
    });
  };

  return { renderTodos };
})();

export default DOMHandler;
