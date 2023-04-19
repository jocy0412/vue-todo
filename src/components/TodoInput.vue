<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <!-- use the modal component, pass in the prop -->
        <AlertModal v-if="showModal" @close="showModal = false">
            <!--
    you can use custom content here to overwrite
    default content
  -->
            <!-- <template #header>경고</template> -->
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
            </h3>
            <h3 slot="body">무언가를 입력하세요!</h3>
        </AlertModal>
    </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== "") {
                const text = this.newTodoItem.trim();
                this.$store.commit("addOneItem", { text });
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
    components: {
        AlertModal,
    },
};
</script>

<style scoped>
input {
    padding: 10px;
    vertical-align: middle;
}
.addContainer {
    padding: 10px;
    background: lightcoral;
    border-radius: 4px;
    vertical-align: middle;
}
</style>
