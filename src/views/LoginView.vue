<template>
    <div class="top">
        <div class="bg-cyan-400	atas ">
            <br>
            <br>
            <h1 class="text-bold" >Finand</h1>
            <p>create, find, and know financial budgeting</p>
            <form @submit.prevent="submitForm" class="">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                    v-model.trim="email" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                    v-model.trim="password" />
            </div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Mode</span>
                </label>
                <select class="select select-bordered w-full max-w-xs" v-model="mode">
                    <option>Login</option>
                    <option>Signup</option>
                </select>
            </div>
            <div class="form-control  w-full max-w-xs p-10 z-40">
                <button type="submit" class="btn">Authenticate</button>
            </div>
        </form>
        </div>
         <div class="gelombang z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,181.3C672,149,768,139,864,149.3C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>        
        </div>
       <div class="a">
        <p class="text-lg">Available With</p>
        <div class="grid grid-cols-3 text-center">
            <div class="grid-rows-1 text-center">
                <img class="text-center" src="../assets/gopay_logo.png" alt="">
            </div>
            <div class="grid-rows-1">
                <img class="text-center" src="../assets/ovo_logo.png" alt="">
            </div>
            <div class="grid-rows-1">
                <img class="p-3 text-center" src="../assets/gopay_bg.png" alt="">
            </div>
        </div>
       </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            mode: "Login",
        }
    },
    methods: {
        async submitForm() {
            const actionPayload = {
                email: this.email,
                password: this.password
            }

            try {
                if (this.mode === 'Login') {
                    await this.$store.dispatch('auth/login', actionPayload);
                    console.log('login');
                } else {
                    await this.$store.dispatch('auth/signup', actionPayload);
                    console.log('signup');
                }
                this.$router.replace('/');
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
    .top{
        position: relative;
    }
    .atas{
        height: 70vh;
    }

    form{
        z-index: 10 !important;
        padding-top: 30px;
    }

    form > div{
        margin: 0 auto !important;
    }

    .label-text{

        color: black ;
    }

    h1{
        text-align: center;
        font-size: 3em;
        font-weight: bold;
        color: black
    }

    img{
        margin: 0 auto;
    }

    .btn{
        position: relative;
        z-index: 10;
    }

    p{
        text-align: center;
        font-size: 1em;
        color: black
    }

    .gelombang{
        position: relative;
        margin-top: -120px;
    }

</style>