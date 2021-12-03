<template>
    <div class="Desktop_view">
        <TaskManager 
            ref="TaskManager" 
            @taskmanager_queuenewwindow="TaskManager_queueNewWindow"
            @taskmanager_synctasks="TaskManager_syncTasks"
            @taskmanager_minimizewindowtask="TaskManager_minimizeWindowTask"
        />
        <SystemBar

        />
        <SystemMenuAndButton 
            @systemmenuandbutton_queuenewwindowtask="WindowManager_TaskManager_queueNewWindowTask"
        />
        <TaskDock 
            ref="TaskDock"
            @taskdock_toggleminimizewindow="TaskDock_toggleMinimizeWindow"
        />
        <WindowManager
            ref="WindowManager"
            @windowmanager_killwindowtask="WindowManager_killWindowTask"
            @windowmanager_minimizewindowtask="WindowManager_minimizeWindowTask"
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
        TaskManager,
        WindowManager,
        TaskDock,

    },
    methods: {
        TaskManager_syncTasks(e){
            this.$refs.WindowManager.syncTasks(e);
            this.$refs.TaskDock.syncTasks(e);
        },
        TaskManager_queueNewWindow(e){
            const newWindow = this.$refs.WindowManager.queueNewWindow(e)
            this.$refs.TaskManager.syncTaskAndWindow(newWindow)
            this.$refs.TaskDock.queueNewTask(newWindow);
        },
        TaskManager_minimizeWindowTask(e){
            this.$refs.WindowManager.TaskManager_Window_minimize(e)
        },
        WindowManager_killWindowTask(e){
            this.$refs.TaskManager.killWindowTask(e);
        },
        WindowManager_minimizeWindowTask(e){
            this.$refs.TaskManager.minimizeWindowTask(e);
        },
        WindowManager_TaskManager_queueNewWindowTask(e){
            this.$refs.TaskManager.queueNewTask(e);
        },
        TaskDock_toggleMinimizeWindow(e) {
            this.$refs.WindowManager.toggleMinimizeWindow(e);
        }
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