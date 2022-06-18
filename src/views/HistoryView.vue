<template>
    <div>

        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content h-60 text-white gap-4"
            id="riwayat-transaksi">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-2xl font-bold	">
                    Riwayat Transaksi
                </div>
                <div class="flex justify-end items-center">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-white" />
                </div>
            </div>
            <div class="grid grid-flow-row auto-rows-auto border-b border-b-gray-400">
                <div class="text-md">
                    Active Total Balance
                </div>
                <div class="font-bold text-4xl">
                    {{ rupiahFormat(balance) }}
                </div>
            </div>
            <div class="text-xl">
                <span class="bg-up-logo-green text-history-blue p-2 rounded mr-2">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                </span> 2% dari bulan lalu
            </div>
        </div>

        <!-- Pengeluaran dan pemasukan -->
        <div class="grid grid-flow-row auto-rows-auto px-5">
            <div class="flex justify-center">
                <font-awesome-icon icon="fa-solid fa-sort-down" class="text-gray-500 text-2xl" />
            </div>
            <div class="grid grid-cols-2 gap-12 mt-7 border-b border-b-gray-300 py-3">
                <div class="text-gray-400 text-end text-2xl cursor-pointer" :class="{
                    'text-history-blue': currentTab == 'pengeluaran',
                    'font-bold': currentTab == 'pengeluaran'
                }" @click="currentTab = 'pengeluaran'">
                    Pengeluaran
                </div>
                <div class="text-gray-400 text-2xl cursor-pointer" :class="{
                    'text-history-blue': currentTab == 'pemasukan',
                    'font-bold': currentTab == 'pemasukan'
                }" @click="currentTab = 'pemasukan'">
                    Pemasukan
                </div>
            </div>
            <div class="mt-5">
                <div class="grid grid-flow-row auto-rows-auto">
                    <!-- pengeluaran -->
                    <div v-if="currentTab == 'pemasukan'">
                        <div v-for="(val, index) in sortedIncome" :key="index">
                        <!-- tanggal pengeluaran/pemasukan -->
                            <div class="text-gray-500 font-semibold">
                                {{val.date}}
                            </div>
                            <!-- end tanggal pengeluaran/pemasukan -->

                            <!-- card pengeluaran pemasukan -->
                            <div class="mt-4">
                                <div class="card w-full bg-white shadow-xl border border-gray-300">
                                    <div class="card-body">
                                        <!-- pengeluaran/pemasukannya -->
                                        <div v-if="currentTab == 'pemasukan'">
                                            <ul>
                                                <li  v-for="(n,i) in val.data" :key="i">
                                                <div class="grid grid-cols-9 border-b border-b-gray-200 py-2">
                                                    <div class="w-14 h-14">
                                                        <div class="bg-blue-200 rounded-lg p-2 flex justify-center">
                                                            <img src="../assets/gopay_logo.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-span-4 grid grid-flow-row auto-rows">
                                                        <div class="text-lg font-bold text-black">{{n.description}}</div>
                                                        <div class="text-gray-400 font-semibold">
                                                            {{n.category.classification_group}}
                                                        </div>
                                                    </div>
                                                    <div class="col-span-4 grid grid-flow-row auto-rows text-end">
                                                        <div class="text-lg font-bold" :class="{
                                                            'text-red-500': currentTab == 'pengeluaran',
                                                            'text-green-500': currentTab == 'pemasukan',
                                                        }">
                                                        <h1>
                                                            {{n.amount}}
                                                        </h1>
                                                        </div>
                                                        <div class="text-gray-500">{{n.date}}</div>
                                                    </div>
                                                </div>
                                            </li>   
                                            </ul>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentTab == 'pengeluaran'">
                        <div v-for="(val, index) in sortedOutcome" :key="index">
                        <!-- tanggal pengeluaran/pemasukan -->
                            <div class="text-gray-500 font-semibold">
                                {{val.date}}
                            </div>
                            <!-- end tanggal pengeluaran/pemasukan -->

                            <!-- card pengeluaran pemasukan -->
                            <div class="mt-4">
                                <div class="card w-full bg-white shadow-xl border border-gray-300">
                                    <div class="card-body">
                                        <!-- pengeluaran/pemasukannya -->
                                        <div v-if="currentTab == 'pengeluaran'">
                                            <ul>
                                                <li  v-for="(n,i) in val.data" :key="i">
                                                <div class="grid grid-cols-9 border-b border-b-gray-200 py-2">
                                                    <div class="w-14 h-14">
                                                        <div class="bg-blue-200 rounded-lg p-2 flex justify-center">
                                                            <img src="../assets/gopay_logo.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="col-span-4 grid grid-flow-row auto-rows">
                                                        <div class="text-lg font-bold text-black">{{n.description}}</div>
                                                        <div class="text-gray-400 font-semibold">
                                                            {{n.category.classification_group}}
                                                        </div>
                                                    </div>
                                                    <div class="col-span-4 grid grid-flow-row auto-rows text-end">
                                                        <div class="text-lg font-bold" :class="{
                                                            'text-red-500': currentTab == 'pengeluaran',
                                                            'text-green-500': currentTab == 'pemasukan',
                                                        }">
                                                        <h1>
                                                            {{n.amount}}
                                                        </h1>
                                                        </div>
                                                        <div class="text-gray-500">{{n.date}}</div>
                                                    </div>
                                                </div>
                                            </li>   
                                            </ul>
                                        </div>
                                    </div>   
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end card pengeluaran pemasukan -->

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
// let url = "https://sandbox.onebrick.io/v1/"
export default {
    data() {
        return {
            // tanggal sekarang
            currentDate: "",
            data: [],
            currentTab: 'pengeluaran',
            income: [],
            sortedIncome: [],
            sortedOutcome:  [],
            dateCategory: [],
            outcome: "",
            balance: "",
        }
    },
    methods: {
         async getHistory(){
            await this.getUserAccess()
            await this.$store.dispatch('transaksi/setTransaksi', this.data.gopay)
            await this.$store.dispatch('transaksi/setTransaksi', this.data.ovo)
            await this.$store.dispatch('transaksi/setTransaksi', this.data.tsrf)
            await this.totalBalance()
            this.sortingData()
        },

        async totalBalance(){
            await this.$store.dispatch('balance/setBalance', this.data.ovo)
            await this.$store.dispatch('balance/setBalance', this.data.gopay);
            await this.$store.dispatch('balance/setBalance', this.data.tsrf)
            this.balance = this.$store.getters['balance/balance']
            console.log(this.balance)
        },

        async getUserAccess() {
            let idToken = localStorage.getItem('idToken');

            let data = await axios({
                method: 'get',
                url: `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/userToken/id_1/.json?auth=${idToken}`,
            }).then(response => {
                return response.data
            })

            return this.data = data
        },
        async dataIncome(){
            let data = []
            this.income.forEach(element => {
                if(data[element.date] == undefined){
                    data[element.date] = []
               }
                data[element.date].push(element)
            });
            
            let databaru = []
            for(let key in data){
                let data2 = {
                    date: key,
                    data: data[key]
                }
                databaru.push(data2)
            }

            this.sortedIncome = databaru
        },
        async dataOutcome(){
            let data = []
            this.outcome.forEach(element => {
                if(data[element.date] == undefined){
                    data[element.date] = []
               }
                data[element.date].push(element)
            });
            
            let databaru = []
            for(let key in data){
                let data2 = {
                    date: key,
                    data: data[key]
                }
                databaru.push(data2)
            }

            this.sortedOutcome = databaru
            console.log(this.sortedOutcome)
        },
        async sortingData(){
            this.income = this.$store.getters['transaksi/income']
            
            await this.dataIncome();

            this.outcome= this.$store.getters['transaksi/outcome']
            
            await this.dataOutcome();
        },
         rupiahFormat(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
    },
    async created(){
       try{
            await this.getHistory()
            // urutkan data income sesuai tanggal
       }
         catch(e){
                console.log(e)
         }
    },
}
</script>

<style scoped>
#riwayat-transaksi {
    background-image: url("../assets/bg\ riwayat\ transaksi.png");
}

.bg-history-blue {
    background-color: #273A7D;
}

.text-history-blue {
    color: #273A7D;
}

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>