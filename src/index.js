import './style.css';
import DOMHandler from './modules/DOMHandler';
import formHandler from './modules/formHandler';
import todoList from './modules/todoList';

window.onload = () => {
  todoList.addTodo('laundry', '07-07-2024', 'low');
  todoList.addTodo('dryer', '05-05-1012', 'high');
  DOMHandler.renderTodos();
  formHandler.handleSubmit();
};
