<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
                <span class="textItem" v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
            this.$store.commit("removeOneItem", { todoItem, index });
        },
        toggleComplete(todoItem, index) {
            this.$store.commit("toggleOneItem", { todoItem, index });
        },
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
