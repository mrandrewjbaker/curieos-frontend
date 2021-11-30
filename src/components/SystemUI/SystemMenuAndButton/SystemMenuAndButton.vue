<template>
    <div class="SystemMenuAndButton">
        <button v-bind:class="[menuOpened ? 'opened' : 'closed', 'SystemMenuAndButton_button']" v-on:click="trigger_menuOpened">
            <span  class="material-icons">
            {{menuOpened ? 'close': '∞'}}
            </span>
        </button>
        <div v-bind:class="[menuOpened ? 'opened' : 'closed', 'SystemMenuAndButton_menu']">
            <div class="SystemMenuAndButton_menu___background">
            </div>
            <div class="SystemMenuAndButton_menu___content">
                <ul>
                    <li v-on:click="openWindow('about')">About</li>
                    <li v-on:click="openWindow('settings')">Settings</li>
                    <li v-on:click="openWindow('files')">Files</li>
                    <li v-on:click="openWindow('calculator')">Calculator</li>
                    <li v-on:click="openWindow('terminal')">Terminal</li>
                    <li v-on:click="openWindow('vscode')">VS Code?</li>
                    <li v-on:click="openWindow('startupstepper')">* Startup Stepper</li>


                </ul>
                <SystemMenuSearch />

            </div>
        </div>
    </div>
</template>
<script>
import SystemMenuSearch from './SystemMenuSearch/SystemMenuSearch.vue';
export default {
    name: 'SystemMenuButton',
    components: {
        SystemMenuSearch,
    },
    data () {
        return {
            menuOpened: false,
        }
    },
    methods: {
        trigger_menuOpened () {
            this.menuOpened = !this.menuOpened;
        },
        openWindow(application){
            this.$emit('open-window', application)
            this.trigger_menuOpened()
        }
    }

}
</script>
<style lang="scss" scoped>
.SystemMenuAndButton {
    position: absolute;
    float: left;
    width: 2.25rem;
    height: 2.25rem;
    left: 0;
    bottom: 0;

}

.SystemMenuAndButton_button {
    float: left;
    position: absolute;
    z-index: 101;
    height: 100%;
    width: 100%;
    background-color: #00000033;
    bottom: 0;
    outline: none;
    border: none;
    border-radius: 0 5rem 0rem 0rem;
    transition: all .5s;

    span {
        position: absolute;
        left: 0;
        bottom: 0;
        margin: .35rem;
        padding: 0;
        font-size: 1.5rem;
        color: #fefefe;
        transition: all .5s;

    }

    &:hover {
        background-color: #000000de;
    }

    &.opened {
        height: 75%;
        width: 75%;
        background-color: #e72923;

        span {
            margin: .0625rem;

            font-size: 1.25rem;

        }
    }

    &.closed {

    }

}

.SystemMenuAndButton_menu {
    float: left;
    position: absolute;
    z-index: 10;
    width: 2.25rem;
    height: 2.25rem;
    bottom: 0;
    transition: all .8s;
    border: 2px solid #5f5f5f65;
    border-left: none;
    border-bottom: none;

    .SystemMenuAndButton_menu___background {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        background-color: #00000093;
        border-radius: 0 2rem 0 0;
        backdrop-filter: blur(4px);

    }

    &.opened {
        z-index: 100;
        bottom: 0;
        height: 40rem;
        width: 18rem;
        border-radius: 0 2rem 0 0;


        .SystemMenuAndButton_menu___content {
            display: block;
        }

    }

    &.closed {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0 5rem 0 0;
        opacity: .25;

        .SystemMenuAndButton_menu___background {
            border-radius: 0 5rem 0 0;
            
        }
        .SystemMenuAndButton_menu___content {
            display: none;
        }
    }

    .SystemMenuAndButton_menu___content {
        float: left;
        color: #fefefe;

        ul {
            float: left;
            width: 100%;
            padding: 0;
            margin: 0;

            li {
                float: left;
                width: 100%;
                text-decoration: none;
                list-style-type: none;
                height: 2rem;
                line-height: 2rem;
                text-indent: .25rem;
                
                &:first-child {
                    border-radius: 0 5rem 0 0;

                }


                &:hover {
                    background-color: #00000080;
                }
            }
        }
    }
}

</style>