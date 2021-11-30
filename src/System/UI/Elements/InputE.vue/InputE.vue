<template>
    <div class="InputE">
        <input 
            v-bind:type="type"
            v-bind:model="model"
            v-bind:placeholder="placeholder"
        />
</template>
<script>
export default {
    name: 'InputE',
    props: [
        'type',
        'placeholder',
        'initialValue',
    ],
    data () {
        return {
            model: undefined
        }
    },
    methods: {
        initializeInput() {
            switch (this.type) {
                case 'number':
                    this.model = this.initialValue ? this.initialValue : 0;
                    break;
                case 'string':
                    this.model = this.initialValue ? this.initialValue : '';
                    break;
                default:
                    break;
            }
        }
    },
    mounted () {
        this.initializeInputE();
    }
}
</script>