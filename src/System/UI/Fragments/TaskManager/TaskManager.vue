<template>
    
</template>
<script>
export default {
    name: 'TaskManager',
    data () {
        return {
            tasks: [],
            task_template: {
                id: 0,
                application: '',
                title: '',
                windowId: 0,

            },
        };
    },
    methods: {
        queueNewTask (e) {
            const newTask = { ... this.task_template };
            newTask.id = this.tasks.length > 0 ? this.tasks.length + 1 : 1;
            newTask.application = e.application
            newTask.title = e.application
            newTask.windowId = 0
            this.tasks.push(newTask)
            this.$emit('TaskManager_queueNewWindow', newTask)
        }
    },
    mounted () {
        console.log('Task Manager - initialized')
    }
}
</script>