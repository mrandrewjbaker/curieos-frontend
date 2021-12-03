<template>
    <div class="TaskDock">
        <div 
            v-for="(task, index) in dockedTasks" 
            v-bind:key="index" class="TaskItem"
            v-on:click="toggleMinimizeWindow(task)"
        >

        </div>
    </div>
</template>
<script>
export default {
    name: 'TaskDock',
    data () {
        return {
            dockedTasks: [],
            
        }
    },
    methods: {
        syncTasks(e){
            this.dockedTasks = [...e];
        },
        killWindowTask(e){
            const targetedTask = this.dockedTasks.find((task) => task.windowId === e.windowId);
            const targetedTaskIndex = this.dockedTasks.indexOf(targetedTask);
            this.dockedTasks.splice(targetedTaskIndex, 1);            
        },
        queueNewTask(task){
            this.dockedTasks.push(task);
        },
        toggleMinimizeWindow(task) {
            this.$emit('taskdock_toggleminimizewindow', task);
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
        position: relative;
        bottom: 0px;
        float: left;
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        background-color: red;
        line-height: 2rem;

        &:hover {
            height: 2.25rem;
            width: 2.25rem;
            line-height: 2.25rem;
            bottom: 5px;

            
            
        }
    }
}
</style>