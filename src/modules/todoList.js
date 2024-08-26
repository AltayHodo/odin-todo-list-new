import Todo from './todo';

const todoList = (() => {
  const projects = [];
  const todos = [];

  const getTodos = () => todos;
  const getProjects = () => projects;

  const addTodo = (title, dueDate, priority) => {
    const newTodo = new Todo(title, dueDate, priority);
    todos.push(newTodo);
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
  };

  const addProject = (title) => {
    projects.push(title);
  };

  return { getTodos, getProjects, addTodo, removeTodo, addProject };
})();

export default todoList;
