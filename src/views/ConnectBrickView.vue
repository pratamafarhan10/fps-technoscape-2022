<template>
    <div class="btn btn-primary" @click="getPublicToken">
        Get Public Token
    </div>
    <div class="btn btn-primary" @click="contoh">
        show
    </div>
    <br>
    <br>
    <!-- ini gojek -->
    <p class="text-8px">Gopay Login</p>
    <form @submit.prevent="authGopay">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
                <span>Nomor Telepon</span>
                <input type="text" placeholder="info@site.com" v-model.trim="username" class="input input-bordered" />
            </label>
            <button type="submit" class="btn">Auth Gopay</button>
        </div>
    </form>
    <BR></BR>
    <form @submit.prevent="otpGopay">
        <label class="input-group">
            <span>OTP</span>
            <input class="input input-bordered"  type="text" v-model.trim="otp">
        </label>
        <button type="submit" class="btn">send otp</button>
    </form>

    <br>
    <br>
    <!-- ini shopee -->
    <p class="text-8px">Shoppe Login</p>
    <form @submit.prevent="authShoopee">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Your Email</span>
            </label>
            <label class="input-group">
                <span>Email</span>
                <input type="text" placeholder="info@site.com" v-model.trim="username" class="input input-bordered" />
            </label>
            <label class="input-group">
                <span>Password</span>
                <input type="text" placeholder="info@site.com" v-model.trim="password" class="input input-bordered" />
            </label>
            <button type="submit" class="btn">Auth Shoopee</button>
        </div>
    </form>
    <BR></BR>
    <form @submit.prevent="otpShopee">
        <label class="input-group">
            <span>OTP</span>
            <input class="input input-bordered"  type="text" v-model.trim="otp">
        </label>
        <button type="submit" class="btn">send otp</button>
    </form>
</template>

<script>
    export default{
        name: 'ConnectBrick',
        data(){
            return {
                user: "Barly Vallendito",
                pemasukan: 40000,
                pengeluaran: 20000,
                clientId: "f42fb0c4-cd2a-46cf-b593-014c16344d21",
                clientSecret: "JwDnq1rdbbBqB4YP2PV52Gz5jNnTlj",
            }
        },
        components:{
        },
        methods: {
            getPublicToken: async function(){
                const credentials = {
                    clientId: this.clientId,
                    clientSecret: this.clientSecret,
                }

                this.$store.dispatch('brick/getPublicToken', credentials)
            },
            authGopay: function(){
                const actionPayload = {
                    institution_id: "11",
                    username: this.username,
                    publicToken:  this.$store.getters['brick/publicToken'],
                }

                this.$store.dispatch('brick/authBrickFinance', actionPayload)
                // this.isHidden = false
            },
            otpGopay: function(){
                const actionPayload = {
                    institution_id: "11",
                    otp: this.otp,
                }

                this.$store.dispatch('brick/otpGopay', actionPayload)
                // this.isHidden = false
            },

            // shoopee
            authShoopee: function(){
                const actionPayload = {
                    institution_id: "15",
                    username: this.username,
                    password: this.password,
                    publicToken:  this.$store.getters['brick/publicToken'],
                }

                this.$store.dispatch('brick/authBrickFinance', actionPayload)
                // this.isHidden = false
            },

            contoh: function(){
                console.log(this.$store.getters['brick/publicToken'])
            }
        }
    }
</script>

<style scoped>

</style>