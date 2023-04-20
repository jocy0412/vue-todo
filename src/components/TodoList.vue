<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete({ todoItem, index })"></i>
                <span class="textItem" v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span v-on:click="removeTodo({ todoItem, index })">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    methods: {
        // removeTodo(todoItem, index) {
        //     this.$store.commit("removeOneItem", { todoItem, index });
        // },
        // 위의 removeTodo는 아래의 mapMutaions 방법으로 사용이 가능하고 인자가 복수로 넘길 경우에는 템플릿에서 넘겨준 인자값을 그대로 받는다. 하지만 복수로 넘겨줄 때 객체로 념겨줘야한다.
        ...mapMutations({
            removeTodo: "removeOneItem",
            toggleComplete: "toggleOneItem",
        }),
    },
    computed: {
        // 1번 방법
        // todoItems() {
        //     return this.$store.getters.storedTodoItems;
        // },
        // 2번 방법
        // ...mapGetters(["storedTodoItems"]),
        // 3번 방법
        ...mapGetters({
            todoItems: "storedTodoItems",
        }),
    },
};
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0 40px 20px;
    text-align: left;
}
li {
    margin-top: 10px;
    padding: 12px 14px;
    list-style: none;
    background-color: #fff;
    border-top: 0;
    border-radius: 5px;
}
li:first-child {
    margin-top: 0;
}
.textItem {
    margin: 0 10px;
}
.textCompleted {
    text-decoration: line-through;
}
.checkBtnCompleted {
    color: #5588ff;
}
.fa-trash-alt {
    color: firebrick;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
