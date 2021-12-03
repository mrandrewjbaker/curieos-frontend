<template>
    <Window v-for="(window, index, key) in windows" 
        v-bind:key="key"
        v-bind:windowId="window.windowId"
        v-bind:title="window.title"
        v-bind:application="window.application"
        v-bind:isActive="window.isActive"
        @window_bringforward="WindowManager_Window_bringForward"
        @window_minimize="Window_minimize"
        @window_close="Window_close"
    />
</template>
<script>
import Window from '@/System/UI/Fragments/Window/Window.vue';

export default {
    name: 'WindowManager',
    components: {
        Window
    },
    data () {
        return {
            windows: [],
            window_template: {
                windowId: 0,
                title: '',
                application: '',
            }
        }
    },
    emits: [
        "windowmanager_killwindowtask",
        "windowmanager_minimizewindowtask"
    ],
    methods: {
        syncTasks(e){
            this.windows = [...e];
        },
        WindowManager_Window_bringForward(e) {
            console.log(e)
            const activeWindow = this.windows.find((window) => window.windowId === e.windowId);
            console.log(activeWindow)
            activeWindow.isActive = true;
            for(var i = 0; i < this.windows.length; i++){
                if(this.windows[i].windowId != e.windowId){
                    this.windows[i].isActive = false;
                }
            }
        },
        Window_minimize(e){
            this.$emit('windowmanager_minimizewindowtask', { windowId: e.windowId })
        },
        Window_close(e){
            this.$emit('windowmanager_killwindowtask', { windowId: e.windowId });
        },
        TaskManager_Window_minimize(e){
            console.log(e)
            const targetedTask = this.windows.find((window) => window.windowId === e.windowId);
            const targetedTaskIndex = this.windows.indexOf(targetedTask);
            this.windows.splice(targetedTaskIndex, 1);
        },
        toggleMinimizeWindow(e){
            const matchingWindowTask = this.windows.find((window) => window.taskId === e.taskId)
            if(!matchingWindowTask){
                this.windows.push(e);
            }
        },
        queueNewWindow(e){
            const newWindow = { ... e };
            newWindow.windowId = this.windows.length > 0 ? this.windows[this.windows.length - 1].windowId + 1 : 1;
            newWindow.isActive = true;
            this.windows.push(newWindow)
            return newWindow;
        }
    }
}
</script>