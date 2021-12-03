<template>
    
</template>
<script>
export default {
    name: 'TaskManager',
    data () {
        return {
            tasks: [],
            task_template: {
                taskId: 0,
                windowId: 0,
                dockTaskId: 0,
                application: '',
                title: '',
                isActive: true,

            },
        };
    },
    methods: {
        syncTasks(e){
            this.tasks = e;
        },
        minimizeWindowTask(e){
            console.log(e)
            console.log(this.tasks)
            const targetedTask = this.tasks.find((task) => task.windowId === e.windowId);
            this.$emit('taskmanager_minimizewindowtask', targetedTask);
        },
        killWindowTask(e){
            const targetedTask = this.tasks.find((task) => task.windowId === e.windowId);
            const targetedTaskIndex = this.tasks.indexOf(targetedTask);
            this.tasks.splice(targetedTaskIndex, 1);
            this.$emit('taskmanager_synctasks', this.tasks);     
        },
        syncTaskAndWindow(e){
            const existingTask = this.tasks.find((task) => task.taskId === e.taskId);
            const existingTaskIndex = this.tasks.indexOf(existingTask);
            this.tasks[existingTaskIndex] = {...e};

        },
        queueNewTask (e) {
            const newTask = { ... this.task_template };
            newTask.taskId = this.tasks.length > 0 ? this.tasks.length + 1 : 1;
            newTask.application = e.application;
            newTask.title = e.application;
            this.tasks.push(newTask);
            this.$emit('taskmanager_queuenewwindow', newTask);
        }
    },
    mounted () {
        console.log('Task Manager - initialized');
    }

}
</script>