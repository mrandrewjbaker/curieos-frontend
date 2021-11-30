<template>
    <div class="SystemBarClock">
        <p>{{localTime}}</p>
    </div>
</template>
<script>
export default {
    name: 'SystemBarClock',
    data () {
        return {
            localTime: `00:00`,
        }
    },
    created() {
        setInterval(this.getLocalTime, 1000);
    },
    methods: {
        getLocalTime: function() {
            const now = new Date();
            // const clockHour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
            const clockHour = Math.abs(now.getHours() > 12 ? now.getHours() - 12 : now.getHours());

            const clockMinute = (now.getMinutes() < 10 ? '0' : '' ) + now.getMinutes()
            const clockAmPm = now.getHours() >= 12 ? 'PM' : 'AM';  
            const time = `${clockHour}:${clockMinute} ${clockAmPm}`;
            this.localTime = time;
        }
    }
}
</script>
<style lang="scss" scoped>
.SystemBarClock {
    float: left;
    text-align: center;
    width: 20%;
    margin-left: 40%;
    height: 100%;

    p {
        font-size: 1rem;
        color: #fefefe;
        margin: 0;
        margin-right: .5rem;
        padding: 0;
        height: 100%;
        line-height: 1.75rem;
    }
}
</style>