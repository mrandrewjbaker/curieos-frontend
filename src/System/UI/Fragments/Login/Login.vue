<template>
    <div class="Login_view">
        <div class="Login_panel">
            <h1>mooos</h1>
            <p>Sign In</p>

            <form class="Login_form">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>

            </form>
            <button class="registerButton">
                Sign In
            </button>
            <p>Don't have an account?</p>
            <button class="registerButton">
                Register
            </button>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Login',
}
</script>
<style lang="scss" scoped>
    .Login_view {
        display: grid;
        justify-items: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background: #159957;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        .Login_panel {
            text-align: center;
            height: 50%;
            width: 60%;
            background-color: #3b3b3bda;
            border: 3px solid #3b3b3b;
            color: #ec9420;
            border-radius: .5rem;

            form.Login_form {
                float: left;
                width: 100%;
                margin-top: 4rem;

                input{
                    float: left;

                    width: 40%;
                    margin-top: 1rem;
                    margin-left: 30%;
                    border-radius: .5rem;
                }
            }
        }
    }
</style>