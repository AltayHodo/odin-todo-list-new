import todoList from './todoList';

const formHandler = (() => {
  const taskForm = document.querySelector('.add-task-form');
  const handleSubmit = () => {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskName = document.querySelector('input#task-name').value;
      const priority = document.querySelector(
        'input[name="priority"]:checked'
      ).id;
      const dueDate = document.querySelector('input#due-date').value;
      todoList.addTodo(taskName, dueDate, priority);
    });
  };

  return { handleSubmit };
})();

export default formHandler;
