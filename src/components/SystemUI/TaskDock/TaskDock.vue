<template>
    <div class="TaskDock">
        <div v-for="(task, index) in tasks" v-bind:key="index" class="TaskItem">
        </div>
    </div>
</template>
<script>
export default {
    name: 'TaskDock',
    data () {
        return {
            tasks: []
        }
    },
    methods: {
        addTask(task){
            this.tasks.push(task);
        }
    }

}
</script>
<style lang="scss" scoped>
.TaskDock {
    position: absolute;
    bottom: 0;
    right: 0;
    min-width: 10%;
    height: 2.25rem;
    background-color: #32323250;
    
    .TaskItem {
        float: left;
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        background-color: red;
    }
}
</style>