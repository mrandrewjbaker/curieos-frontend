<template>
    <div ref="Window" class="Window" v-bind:style="styleProps" 
        v-on:mousedown="Window_bringForward"
        v-on:touchstart="Window_bringForward"
        >
        <div class="Window_resize">
            <div 
                class="Window_resize___leftTop"
                @drag="handleResize"
                >
            </div>

            <div class="Window_resize___top">
            </div>

            <div class="Window_resize___rightTop">
            </div>

            <div class="Window_resize___left">
            </div>

            <div class="Window_resize___middle">
            </div>

            <div class="Window_resize___right">
            </div>

            <div 
                class="Window_resize___leftBottom"
                @drag="handleResize($event, 'lb')"
            
            >
            </div>

            <div class="Window_resize___bottom">
            </div>

            <div class="Window_resize___rightBottom">
            </div>
        </div>
        <div 
            class="Window_titleBar" 
            @mousedown="updateWindowCursorDistance" 
            @dragstart="handleInitialDrag" 
            @drag="handleDrag" 
            @dragend="handleDrag" 
            @touchstart="updateWindowCursorDistance" 
            @touchmove="handleDrag"
            @touchend="handleDrag"
            draggable=true
        >
            <div class="Window_titleBarTitle">
                <p>{{title}}</p>
            </div>
            <div class="Window_titleBarControls">
                <div v-on:click="Window_minimize()" class="Window_titleBarControl Window_titleBarControl___minimize">
                    <span class="material-icons">
                        expand_more
                    </span>
                </div>
                <div v-on:click="Window_maximize()" class="Window_titleBarControl Window_titleBarControl___maximize">
                    <span  class="material-icons-outlined">
                        unfold_more
                    </span>
                </div>
                <div v-on:click="Window_close()" class="Window_titleBarControl Window_titleBarControl___close">
                    <span  class="material-icons">
                        close
                    </span>
                </div>
            </div>
        </div>
        <div class="Window_content">
            <component v-bind:is="initApplication" />
        </div>
    </div>
</template>
<script>
import startupstepper from '@/System/Applications/StartupStepper/StartupStepper.vue';

import about from '@/System/Applications/About/About.vue' ;
import terminal from '@/System/Applications/Terminal/Terminal.vue';


export default {
    name: 'Window',
    components: {
        startupstepper,
        about,
        terminal,
    },
    data () {
        return {
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            style: '',
            styleProps: {
                '--window-height': '100%',
                '--window-width': '60%',
                '--window-top': '0px',
                '--window-left': '0px',
                '--window-z-index': 11,
                
            },
            windowCursorDistance: {
                x: 0,
                y: 0,
            }
        }
    },
    props: [
        "windowId",
        "title",
        "application",
        "isActive",
    ],
    computed: {
        initApplication(){
            return this.application
        },
    },
    mounted () {

    },
    watch: {
        isActive: {
            flush: 'post',
            handler: 'handleChange_isActive', 
        }
    },
    methods: {
        Window_minimize() {
            this.$emit('window_minimize', {windowId: this.windowId});
        },
        Window_maximize() {
            this.styleProps['--window-top'] = '0px';
            this.styleProps['--window-left'] = '0px';
            this.styleProps['--window-width'] = '100%';
        },
        Window_close() {
            this.$emit('window_close', { windowId: this.windowId });
        },
        handleChange_isActive(newValue){
            this.styleProps['--window-z-index'] = newValue ? 11 : 10;
        },
        Window_bringForward (e) {
            const targetWindow = e.target;
            this.$emit('window_bringforward', {windowId: this.windowId});
        },
        updateWindowCursorDistance (e) {
            const windowPositions = e.target.parentNode.getBoundingClientRect();

            if (e.x != undefined && e.y != undefined) {
                this.windowCursorDistance.x = e.x - windowPositions.x
                this.windowCursorDistance.y = e.y - windowPositions.y      
            }else{
                var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
                var touch = evt.touches[0] || evt.changedTouches[0];
                this.windowCursorDistance.x = touch.screenX - windowPositions.x
                this.windowCursorDistance.y = touch.screenY - windowPositions.y      
            }
        },
        handleInitialDrag (e) {
            var img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
            e.dataTransfer.setDragImage(img, 0, 0);
        },
        handleDrag (e) {
            if(e.x != undefined && e.y != undefined){
                if(e.x != 0 && e.y != 0) {
                    this.styleProps['--window-left'] = `${e.x - this.windowCursorDistance.x}px`;
                    this.styleProps['--window-top'] = `${e.y - this.windowCursorDistance.y}px`;
                }
            }else{
                var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
                var touch = evt.touches[0] || evt.changedTouches[0];
                this.styleProps['--window-left'] = touch.screenX - this.windowCursorDistance.x;
                this.styleProps['--window-right'] = touch.screenY - this.windowCursorDistance.y;
            }
        },
        handleResize (e, position) {
        }
    }
}
</script>
<style scoped>
.Window {
    height: var(--window-height);
    width: var(--window-width);
    top: var(--window-top);
    left: var(--window-left);
    z-index: var(--window-z-index);
}
</style>
<style lang="scss">
.Window {
    position: absolute;
    float: left;
    width: 80vw;
    background-color: #ffffff21;
    // border-left: 1px solid #fefefe50;
    // border-right: 1px solid #fefefe50;
    // border-bottom: 1px solid #fefefe50;


    border-radius: .5rem .5rem 1rem 1rem;

    .Window_resize {
        float: left;
        position: absolute;
        z-index: 10;
        height: 100%;
        width: 100%;
        // border-left: 1px solid #b3b3b3;
        // border-right: 1px solid #b3b3b3;
        // border-bottom: 1px solid #b3b3b3;
        border-radius: .5rem .5rem 1rem 1rem;

        .Window_resize___leftTop {
            float: left;
            height: 1rem;
            width: 1rem;
            border-radius: .5rem 0 0 0;
            background-color: #555555;
        }

        .Window_resize___top {
            float: left;
            height: 1rem;
            width: calc(100% - 2rem);
            border-radius: .5rem 0 0 0;
            background-color: #333333;
        }

        .Window_resize___rightTop {
            float: left;
            height: 1rem;
            width: 1rem;
            border-radius: 0 .5rem 0 0;
            background-color: #555555;
        }

        .Window_resize___left {
            float: left;
            height: calc(100% - 2rem);
            width: 2px;
            border-radius: 10rem 0 0 0;
            background-color: #555555;
            cursor: w-resize;
        }

        .Window_resize___middle {
            float: left;
            height: calc(100% - 2rem);
            width: calc(100% - 4px);
            background-color: #555555;
        }


        .Window_resize___right {
            float: right;
            height: calc(100% - 2rem);
            width: 2px;
            background: #555555;
            cursor: e-resize;
        }

        .Window_resize___leftBottom {
            float: left;
            height: 1rem;
            width: 1rem;
            background-color: #555555;
            border-radius: 0 0 0 1rem;
            cursor: sw-resize;



        }

        .Window_resize___bottom {
            float: left;
            height: 1rem;
            width: calc(100% - 2rem);
            background-color: #555555;
            cursor: s-resize;


        }

        .Window_resize___rightBottom {
            float: left;
            height: 1rem;
            width: 1rem;
            background-color: #555555;
            border-radius: 0 0 1rem 0;
            cursor: nw-resize;


        }
    }

    .Window_titleBar {
        position: absolute;
        z-index: 10;
        height: 1.5rem;
        top: 0;
        width: calc(100% - 2px);
        margin-left: 1px;
        background-color: #202020;
        color: #fefefe;
        border-radius: .5rem .5rem 0 0;

        .Window_titleBarTitle {
            float: left;

            p {
                margin: 0;
                text-indent: .35rem;
            }
        }

        .Window_titleBarControls {
            float: right;
            height: 100%;
            display: flex;
            align-items: center;

            .Window_titleBarControl {
                height: 1.35rem;
                width: 1.35rem;
                margin-left: .35rem;
                margin-right: .35rem;
                border-radius: 100%;
                filter: drop-shadow(1px 1px 1px #3232329a);
                display: flex;
                justify-content: center;
                align-items: center;

                span{ 
                    font-size: .85rem;
                    line-height: 1rem;
                    color: #fefefe;
                    font-weight: 300;
                }
            }

            .Window_titleBarControl___close {
                background-color: #eb1010;

            }
            
            .Window_titleBarControl___maximize {
                background-color: #2553ec;
            }

            .Window_titleBarControl___minimize {
                background-color: #ff7300;
            }

        }

    }

    .Window_content {
        position: absolute;
        z-index: 10;
        bottom: .125rem;
        float: left;
        height: calc(100% - 1.75rem);
        width: calc(100% - 4px);
        margin-left: 2px;
        background: rgb(39, 39, 39);
        color: #fefefe;
        border-radius: 0 0 1rem 1rem;

    }
}


</style>