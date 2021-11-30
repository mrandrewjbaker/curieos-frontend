<template>
    <div class="SystemMenuSearch">
        <input placeholder="Search..." />
    </div>
</template>
<script>
export default {
    name: 'SystemMenuSearch'
}
</script>
<style lang="scss" scoped>
.SystemMenuSearch {
    float: left;
    height: 2.5rem;

    width: calc(100% - 2.25rem);
    margin-left: 2.25rem;
    position: absolute;
    bottom: 0;


    input {
        position: absolute;
        width: 100%;
        height: 75%;
        bottom: 0;
        // margin-right: 5%;
        border-radius: 1rem 0 0 0;
        outline: none;
        border: none;
        padding: 0;
        text-indent: .35rem;
        background: #f5f5f5c5;
        color: #3b3b3b;
        font-size: .85rem;


        &::placeholder {
            color: #424242;
        }
    }
}
</style>