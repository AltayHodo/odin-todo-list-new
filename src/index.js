import './style.css';
import DOMHandler from './modules/DOMHandler';
import todoList from './modules/todoList';

window.onload = () => {
  todoList.addTodo('laundry', 'laundry', 'laundry')
  todoList.addTodo('dryer', 'laundry', 'laundry')
  DOMHandler.renderTodos();
}