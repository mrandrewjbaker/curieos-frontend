<template>
    <div class="SystemApplication_Terminal">
        <div class="Log">
            <p v-for="(record, index) in log" v-bind:key="index">{{record[0]}}:> {{record[1]}}</p>
        </div>
        <div class="Input">
            <input type="text" v-model="input"/>
        </div>
        <div class="Send">
            <button v-on:click="submit">∞</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
    data () {
        return {
            input: '',
            log: [
                ['curieOS', 'Welcome to CurieOS Terminal'],
            ]
        }
    },
    methods: {
        submit(){
            this.log.push(['user', this.input]);
            this.input = '';
            this.evaluate()
        },
        evaluate(){
            console.log(this.log[this.log.length - 1])
            this.log.push(['curieOS', 'Error: Failed to connect to CurieTerm'])
        }
    }
}
</script>
<style lang="scss" scoped>
p{
    margin: 0;
}

.SystemApplication_Terminal {
    font-family: monospace;
    float: left;
    width: 100%;
    height: 100%;
    .Log {
        float: left;
        width: 100%;
        height: 90%;
        background-color: #131313;

        p{
            width: 95%;
            margin-left: 2.5%;
            margin-right: 2.5%; 
        }
    }

    .Input {
        float: left;
        width: 90%;
        height: 10%;


        input {
            float: left;
            width: 100%;
            height: 100%;
            outline: none;
            padding: 0;
            padding-left: 1%;
            padding-right: 1%;
            border: 0;
            border-radius:  0 0 0 1rem;
            background-color: #323232;
            color: #eaeaea;
        }
    }

    .Send {
        float: left;
        width: 10%;
        height: 10%;

        button {
            float: left;
            width: 100%;
            height: 100%;
            border-radius:  0 0 1rem 0;
            padding: 0;
            border: 0;
            font-size: 1.5rem;
            background-color: #6d2d92;
            color: #eaeaea;

        }
        
    }

}
</style>