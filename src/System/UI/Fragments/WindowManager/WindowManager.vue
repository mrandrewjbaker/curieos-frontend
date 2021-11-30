<template>
    <Window v-for="(window, index) in windows" 
        v-bind:key="index"
        v-bind:id="window.id"
        v-bind:title="window.title"
        v-bind:application="window.application"
        v-bind:isActive="window.isActive"
        @Window_BringForward="WindowManager_Window_BringForward"
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
                id: 0,
                title: '',
                application: '',
            }
        }
    },
    methods: {
        WindowManager_Window_BringForward(e) {
            const activeWindow = this.windows.find((window) => window.id === e.id);
            activeWindow.isActive = true;
            for(var i = 0; i < this.windows.length; i++){
                if(this.windows[i].id != e.id){
                    this.windows[i].isActive = false;
                }
            }
        },
        queueNewWindow(e){
            const newWindow = { ... this.window_template };
            newWindow.id = this.windows.length > 0 ? this.windows.length + 1 : 1;
            newWindow.title = e.title;
            newWindow.application = e.application;
            this.windows.push(newWindow)
        }
    }
}
</script>