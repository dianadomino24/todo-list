const items = [
  'Solve a task on Codewars',
  'Water flowers',
  'Complete the tutorial on React expense calculator',
  'Watch out how to do things like Notion',
  'Walk a dog',
  'Understand closures and this',
  'Walk in streets of Marocco in Google maps'
];

const api = new Api({
  baseUrl: 'https://api-test.pa7lux.ru/streams',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.getItems().then(items => {
  const page = document.querySelector('.page');
  const createTodoListForm = (...arg) => new TodoListForm(...arg);
  const createTodoListItem = (...arg) => new TodoListItem(...arg);
  const todoList = new TodoList(items, createTodoListForm, createTodoListItem, api);
  todoList.render(page);
})


