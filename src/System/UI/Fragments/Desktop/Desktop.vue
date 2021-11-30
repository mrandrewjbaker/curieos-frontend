<template>
    <div class="Desktop_view">
        <TaskManager 
            ref="TaskManager" 
            @TaskManager_queueNewWindow="WindowManager_queueNewWindow"
        />
        <SystemBar

        />
        <SystemMenuAndButton 
            @SystemMenuAndButton_queueNewWindowTask="WindowManager_TaskManager_queueNewWindowTask"
        />
        <TaskDock 
            ref="TaskDock" 
        />
        <WindowManager
            ref="WindowManager" 
        />
    </div>
</template>
<script>
import TaskManager from '@/System/UI/Fragments/TaskManager/TaskManager.vue';
import SystemBar from '@/System/UI/Fragments/SystemBar/SystemBar.vue';
import SystemMenuAndButton from '@/System/UI/Fragments/SystemMenuAndButton/SystemMenuAndButton.vue';
import TaskDock from '@/System/UI/Fragments/TaskDock/TaskDock.vue';
import WindowManager from '@/System/UI/Fragments/WindowManager/WindowManager.vue';

export default {
    name: 'Desktop',
    components: {
        SystemBar,
        SystemMenuAndButton,
        TaskDock,
        WindowManager,
        TaskManager,
    },
    methods: {
        WindowManager_queueNewWindow(e){
            this.$refs.WindowManager.queueNewWindow(e)
            this.$refs.TaskDock.queueNewTask(e)
        },
        WindowManager_TaskManager_queueNewWindowTask(e){
            this.$refs.TaskManager.queueNewTask(e)
        },
    }
}
</script>
<style lang="scss" scoped>
.Desktop_view {
    float: left;
    height: 100vh;
    width: 100%;
    
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>