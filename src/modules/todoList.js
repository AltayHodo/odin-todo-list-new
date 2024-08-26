import Todo from './todo';
import DOMHandler from './DOMHandler';

const todoList = (() => {
  const projects = [];
  const todos = [];

  const getTodos = () => todos;
  const getProjects = () => projects;

  const addTodo = (title, dueDate, priority) => {
    const newTodo = new Todo(title, dueDate, priority);
    todos.push(newTodo);
    DOMHandler.renderTodos();
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
    DOMHandler.renderTodos();
  };

  const addProject = (title) => {
    projects.push(title);
  };

  return { getTodos, getProjects, addTodo, removeTodo, addProject };
})();

export default todoList;
