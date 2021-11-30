<template>
    <div class="SystemBar">
        <SystemBarClock />
    </div>    
</template>
<script>
import SystemBarClock from '@/System/UI/Fragments/SystemBar/SystemBarClock/SystemBarClock.vue';

export default {
    name: 'SystemBar',
    components: {
        SystemBarClock
    }
}
</script>
<style lang="scss" scoped>
    .SystemBar {
        position: absolute;
        width: 100%;
        height: 1.75rem;
        top: 0;
        background-color: #0000007a;
        filter: drop-shadow(-5px 7px 8px #050505a8);
        border-radius: 0 0 .5rem .5rem
    }

</style>