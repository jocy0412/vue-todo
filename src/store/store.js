import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        },
    },
    mutations: {
        addOneItem(state, payload) {
            const { text } = payload;
            const addObj = { completed: false, item: text };
            localStorage.setItem(text, JSON.stringify(addObj));
            state.todoItems.push(addObj);
        },
        removeOneItem(state, payload) {
            const { todoItem, index } = payload;
            localStorage.removeItem(todoItem.item);
            state.todoItems.splice(index, 1);
        },
        toggleOneItem(state, payload) {
            const { todoItem, index } = payload;
            // todoItem.completed = !todoItem.completed;
            state.todoItems[index].completed = !state.todoItems[index].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems(state) {
            state.todoItems = [];
            localStorage.clear();
        },
    },
});
