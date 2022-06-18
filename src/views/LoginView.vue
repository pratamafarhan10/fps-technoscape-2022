<template>
    <div>
        <form @submit.prevent="submitForm">
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


            <div class="form-control w-full max-w-xs">
                <button type="submit" class="btn">Authenticate</button>
            </div>
        </form>
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