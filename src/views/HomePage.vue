<template>
    <div class="container mx-auto px-10">
        <div  class="home">
            <div class="grid atas grid-cols-2">
                <div class="welcome grid-rows-6">
                    <p class="text-xl back">Welcome Back</p>
                    <p class="text-3xl">{{user}}</p>
                </div>
                <div class="grid grid-rows-6 user-kanan">
                    <div class="flex justify-end">
                        <p class="notif">
                            <font-awesome-icon icon="fa-solid fa-bell" size="2xl"/>
                            <font-awesome-icon class="circle" icon="fa-solid fa-circle" />
                        </p>
                        <p>
                            <font-awesome-icon icon="fa-solid fa-user" size="2xl"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="revenueStream mb-8 p-6">
        <div class="grid grid-cols-2">
            <div class="pemasukan grid-rows-5 p-4">
                <div class="flex">
                    <div class="flex-none w-">
                        <p>in</p>
                    </div>
                    <div class="flex-none w-10">
                        Pemasukan
                    </div>
                </div>
                <p class="text-3xl">Rp. {{convertMoney(pemasukan)}}</p>
            </div>
            <div class="p grid-rows-5 p-4">
                <div class="flex">
                    <div class="flex-none w-5">
                        <p>in</p>
                    </div>
                    <div class="flex-none w-10">
                        pengeluaran
                    </div>
                </div>
                <p class="text-3xl">Rp. {{convertMoney(pengeluaran)}}</p>
            </div>
        </div>

    </div>
    <BalancePage/>
    <br>
    <div class="transaksi mt-[100px]">
        <div class="grid grid-cols-2">
            <div class="grid-rows-6">
                <div class="flex justify-start">
                    <p class="text-xl">Transaksi Terbaru</p>
                </div>
            </div>
            <div class="grid-rows-6">
                <div class="flex justify-end">
                    <p class="text-xl">Lihat Semua</p>
                </div>
            </div>
        </div>
        <div class="data-transaksi px-10 pt-10 bg-white	mt-[50px]">
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
            <DetailTransaksi/>
        </div>
    </div>
    </div>
</template>

<script>
    import BalancePage from '@/components/molekul/Home/BalancePage.vue'
    import DetailTransaksi from '@/components/molekul/Home/DetailTransaksi.vue'
    export default{
        name: 'HomePage',
        data(){
            return {
                user: "Barly Vallendito",
                pemasukan: 40000,
                pengeluaran: 20000,
            }
        },
        components:{
            BalancePage,
            DetailTransaksi
        },
        methods: {
            convertMoney: function(balance){
                return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        }
    }
</script>

<style scoped>
.home{
    color: rgb(252, 254, 255);
    text-align: left;
}

.fa-circle{
    color: red;
}

.notif{
  position: relative;  
}

.circle{
    position: absolute;
    top: -10px;
    margin-left: -5px;
}

.welcome .back{
    color: rgba(252, 254, 255, 0.8);
}

.user-kanan{
    text-align: right;
    display: grid;
    justify-content: end;
    grid-template-columns: 50px 50px; /*Make the grid smaller than the container*/
    gap: 20px;
    padding: 10px;
}

</style>