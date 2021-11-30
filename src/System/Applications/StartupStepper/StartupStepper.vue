<template>
    <div class="SystemApplication_StartupStepper">
        <div class="Header">
            <h1>Welcome to CurieOS</h1>
            <h4>Let's Sign In</h4>
            <h4><a v-on:click="toggleAccountMode()">Don't have an account?</a></h4>
        </div>
        <form class="Login_Form" v-if="accountMode === 'login'">
            <input type="text" placeholder="einstein@mail.com"/>
            <input type="password" placeholder="password"/>
            <button class="Submit">
                <span class="Button_Content">
                    <p>
                        <span class="material-icons">
                            arrow_forward
                        </span>
                    </p>
                </span>
            </button>
        </form>
        <form class="Register_Form" v-if="accountMode === 'register'">
            <input class="firstName_Input" type="text" placeholder="First Name" />
            <input class="lastName_Input" type="text" placeholder="Last Name" />
            <label>
                <input type="checkbox"/>
                <span>Create a Curieos Mail Account</span>
            </label>

        </form>

    </div>
</template>
<script>
export default {
    name: 'StartupStepper',
    data () {
        return {
            accountMode: 'login'
        }
    },
    methods: {
        toggleAccountMode () {
            this.accountMode = this.accountMode === 'login' ? 'register' : 'login';
        }
    }

}
</script>
<style lang="scss" scoped>
.SystemApplication_StartupStepper {
    .Header {
        float: left;
        width: 100%;
        height: 50%;
        text-align: center;

    }

    .Login_Form {
        input {
            float: left;
            width: 40%;
            margin-left: 30%;
            margin-top: 2rem;
            border: 0;
            outline: none;
            border-radius: .25rem;
            padding: .25rem;
        }

        button {
            float: left;
            width: 3rem;
            height: 3rem;
            line-height: 3rem;
            margin-left: calc(50% - 1.5rem);
            margin-top: 3rem;
            border: 0;
            outline: none;
            border-radius: 100%;
            background-color: #ffffff;
            border: 3px solid #3566ec;

            .Button_Content {
                float: left;
                width: 100%;
                line-height: 2rem;

                p {
                    float: left;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    line-height: 2rem;
                    color: #3566ec;
                    
                    span.material-icons {
                        float: left;
                        width: 100%;
                        line-height: 2rem;
                    }
                }


            }


        }
    }

    .Register_Form {
        width: 40%;
        margin-left: 30%;
        float: left;
        text-align: center;
        justify-content: center;

        input {
            float: left;
            width: 100%;
            margin-top: 2rem;
            border: 0;
            outline: none;
            border-radius: .25rem;
            // padding: .25rem;

            &.firstName_Input {
                width: 46%;
                margin-right: 2%;
            }

            &.lastName_Input {
                width: 46%;
                margin-left: 2%;

            }
        }

        label {
            float: left;
            width: 100%;
            margin-top: 2rem;
            border: 0;
            outline: none;
            border-radius: .25rem;
            padding: 0;
            line-height: 1rem;


            input {
                float: left;
                width: auto;
                padding: 0;
                margin: .25rem;
            }

            span {
                float: left;
                width: auto;
                margin: .125rem;
            }
        }
    }
}

</style>