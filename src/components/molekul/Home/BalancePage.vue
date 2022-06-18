<template>
    <div class="balance">
        <div class="username">
            <p class="text-3xl">Balance</p>
            <p class="text-base">{{userName}}</p>   
        </div>
        <div class="balance-content">
            <div class="balance-content-left-top-left">
                <p class="text-2xl">Rp. {{convertMoney(balance)}}</p>
                <p class="text-base">2% dari bulan lalu</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.balance{
    width: 50%;
    border-radius: 5px;
    padding: 30px;
    background-color: #037cf5;
    color: rgb(252, 254, 255);
    text-align: left;
}

.balance-content{
    margin-top: 50px;
}
</style>

<script>
export default {
    name: 'BalancePage',
    props: {
        typeCredit: String,
    },
    data: function(){
        return {
            balance: 20020000,
            userName: "FPS Team",
        }
    },
    methods: {
        convertMoney: function(balance){
            return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
}
</script>