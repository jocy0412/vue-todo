const addOneItem = (state, payload) => {
  const { text } = payload;
  const addObj = { completed: false, item: text };
  localStorage.setItem(text, JSON.stringify(addObj));
  state.todoItems.push(addObj);
};

const removeOneItem = (state, payload) => {
  const { todoItem, index } = payload;
  localStorage.removeItem(todoItem.item);
  state.todoItems.splice(index, 1);
};

const toggleOneItem = (state, payload) => {
  const { todoItem, index } = payload;
  // todoItem.completed = !todoItem.completed;;
  state.todoItems[index].completed = !state.todoItems[index].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
