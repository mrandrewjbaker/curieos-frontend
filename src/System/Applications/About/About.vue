<template>
    <div class="SystemApplication_About">
        <div class="Header">
            <h1>CurieOS</h1>
            <h4>A Curious Way To Compute</h4>
            <p>version 0.1a</p>
        </div>


        <p>About this machine</p>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>
<style lang="scss" scoped>
.SystemApplication_About {
    float: left;
    width: 100%;
    height: 100%;
    .Header {
        width: 100%;
        height: 25%;
        text-align: center;
    }
}
</style>