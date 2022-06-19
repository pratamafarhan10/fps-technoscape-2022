<template>
    <div class="p-5 flex justify-center items-center h-11/12 grow" v-if="isLoading">
        <button class="btn bg-transparent loading text-black border-none">
            Loading data...
        </button>
    </div>
    <div v-else>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">

            <!-- Header profil -->
            <div class="grid grid-cols-10 gap-4 ">
                <div class="col-span-8  ">
                    <select class="select w-30 bg-transparent max-w-xs">
                        <option class="bg-history-blue">June 2022</option>
                        <option class="bg-history-blue">Mei 2022</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <font-awesome-icon icon="fa-solid fa-bell" class="w-7 h-7 text-white" />
                </div>
                <div class="flex items-center rounded-lg border border-white">
                    <img src="../assets/pp.png" class="rounded-lg">
                </div>
            </div>
            <!-- End Header profil -->

            <!-- pemasukan pengeluaran -->
            <div class="grid grid-cols-2 mt-5 border border-white rounded-lg bg-history-blue p-3">
                <div class="border-r border-r-white py-2 px-5">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-down"
                                class="mr-2 bg-up-logo-green text-white p-1 rounded-md" />
                            <span class="text-white">Pemasukan</span>
                        </div>
                        <div class="mt-2 text-xl font-bold text-white">{{ rupiahFormat(pemasukan) }}</div>
                    </div>
                </div>
                <div class="py-2 px-5">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                                class="mr-2 bg-orange-500 text-white p-1 rounded-md" />
                            <span class="text-white">Pengeluaran</span>
                        </div>
                        <div class="mt-2 text-xl font-bold text-white">{{ rupiahFormat(pengeluaran) }}</div>
                    </div>
                </div>
            </div>

            <!-- end pemasukan pengeluaran -->

            <div>
                <div class="card bg-white">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <div class="text-gray-500">Sisa Budget</div>
                                    <div class="text-black font-bold text-2xl"> {{ rupiahFormat(sisaBudget()) }}</div>
                                </div>
                                <div>
                                    <div class="text-gray-500">Budget Bulanan</div>
                                    <div class="text-black font-bold text-2xl">{{ rupiahFormat(budget.budget) }}</div>
                                </div>
                            </div>
                            <div class="mt-2">
                                <progress class="progress progress-error" :value="progressBar()" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end history header -->

        <!-- Bank -->
        <div class="mt-5 px-5">
            <div class="card bg-sky-800">
                <div class="card-body">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="grid-flow-row auto-rows-auto">
                            <div class="text-lg text-white font-semibold">Balance Gopay</div>
                            <div class="text-white">{{ gopay.balance.accountHolder }}</div>
                        </div>
                        <div class="grid grid-cols-5 gap-4 mt-8">
                            <div class="col-span-3 grid-flow-row auto-rows-auto">
                                <div class="text-2xl text-white font-bold">
                                    {{ rupiahFormat(gopay.balance.balances.available) }}
                                </div>
                                <div class="text-white mt-3 text-sm">
                                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                                        class="mr-2 bg-up-logo-green p-1 rounded-md" />
                                    <span>2% dari bulan lalu</span>
                                </div>
                            </div>
                            <div class="col-span-2 flex items-end">
                                <img src="../assets/gopay_full.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-violet-900 mt-4">
                <div class="card-body">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="grid-flow-row auto-rows-auto">
                            <div class="text-lg text-white font-semibold">Balance Ovo</div>
                            <div class="text-white">{{ ovo.balance.accountHolder }}</div>
                        </div>
                        <div class="grid grid-cols-5 gap-4 mt-8">
                            <div class="col-span-3 grid-flow-row auto-rows-auto">
                                <div class="text-2xl text-white font-bold">
                                    {{ rupiahFormat(ovo.balance.balances.available) }}
                                </div>
                                <div class="text-white mt-3 text-sm">
                                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                                        class="mr-2 bg-up-logo-green p-1 rounded-md" />
                                    <span>2% dari bulan lalu</span>
                                </div>
                            </div>
                            <div class="col-span-2 flex items-end">
                                <img src="../assets/ovo_full.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-green-800 mt-4">
                <div class="card-body">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="grid-flow-row auto-rows-auto">
                            <div class="text-lg text-white font-semibold">Balance Tsrf</div>
                            <div class="text-white">{{ tsrf.balance.accountHolder }}</div>
                        </div>
                        <div class="grid grid-cols-5 gap-4 mt-8">
                            <div class="col-span-3 grid-flow-row auto-rows-auto">
                                <div class="text-2xl text-white font-bold">
                                    {{ rupiahFormat(tsrf.balance.balances.available) }}
                                </div>
                                <div class="text-white mt-3 text-sm">
                                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                                        class="mr-2 bg-up-logo-green p-1 rounded-md" />
                                    <span>2% dari bulan lalu</span>
                                </div>
                            </div>
                            <div class="col-span-2 flex items-end text-3xl text-white font-semibold justify-center">
                                Mock Bank
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end bank -->


        <!-- Transaksi terbaru -->
        <div class="grid-flow-row auto-rows-auto mt-10 px-5">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-black text-xl font-bold">Transaksi terbaru</div>
                <div class="text-history-blue font-bold text-xl text-end">Lihat semua</div>
            </div>
            <div class="mt-4">
                <!-- card pengeluaran pemasukan -->
                <div class="card w-full bg-white border border-gray-300">
                    <div class="card-body">

                        <!-- pengeluaran/pemasukannya -->
                        <div v-for="(n, i) in dataAktivitasTransaksi" :key="i">
                            <div class="grid grid-cols-9 border-b border-b-gray-200 py-2">
                                <div class="w-14 h-14">
                                    <div class="bg-blue-200 rounded-lg p-2 flex justify-center">
                                        <img src="../assets/gopay_logo.png" alt="">
                                    </div>
                                </div>
                                <div class="col-span-5 grid grid-flow-row auto-rows">
                                    <div class="text-md font-bold text-black">{{ n.description }}</div>
                                    <div class="text-gray-400 font-semibold">{{ n.category.classification_group }}</div>
                                </div>
                                <div class="col-span-3 grid grid-flow-row auto-rows text-end">
                                    <!-- <div class="text-lg font-bold" :class="{
                                            'text-red-500': currentTab == 'pengeluaran',
                                            'text-green-500': currentTab == 'pemasukan',
                                        }">
                                            -Rp 25.000
                                        </div> -->
                                    <div class="text-lg font-bold" :class="{
                                        'text-red-500': n.direction == 'out',
                                        'text-green-500': n.direction == 'in',
                                    }">
                                        <h1 v-if="n.direction == 'out'">
                                            -{{ n.amount }}
                                        </h1>
                                        <h1 v-if="n.direction == 'in'">
                                            +{{ n.amount }}
                                        </h1>
                                    </div>
                                    <div class="text-gray-500">{{ changeDateFormat(n.date) }}</div>
                                </div>
                            </div>
                            <!-- <div class="text-gray-500">18 sept 2019</div> -->
                        </div>
                    </div>
                    <!-- end of pengeluaran/pemasukan -->
                </div>
            </div>
            <!-- end card pengeluaran pemasukan -->
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            dataAccsess: [],
            dataPemasukan: "",
            pemasukan: 0,
            dataPengeluaran: "",
            pengeluaran: 0,
            dataAktivitasTransaksi: [],
            gopay: "",
            ovo: '',
            tsrf: "",
            isLoading: false,
            sisa: 0,
            budget: {
                category: {
                    transportation: 0,
                    food_and_dining: 0,
                    education: 0,
                    shopping: 0,
                    health_and_fitness: 0,
                    deposit: 0,
                },
                budget: 0
            },
            transaksi: {
                category: {
                    transportation: 0,
                    food_and_dining: 0,
                    education: 0,
                    shopping: 0,
                    health_and_fitness: 0,
                    deposit: 0,
                },
            },
        }
    }, methods: {
        async revenueMoney() {
            await this.$store.dispatch('userAccses/getUserAccess');
            this.dataAccsess = await this.$store.getters['userAccses/userAccsess'];
            await this.$store.dispatch('transaksi/setTransaksi', this.dataAccsess)
            await this.balanceWallet()
            this.dataPengeluaran = await this.$store.getters['transaksi/outcome']
            this.dataPemasukan = await this.$store.getters['transaksi/income']
            this.aktivitasTransaksi()
            this.pemasukan = await this.hitung(this.dataPemasukan);
            this.pengeluaran = await this.hitung(this.dataPengeluaran);
            // await this.hitung(this.dataPemasukan, this.pengeluaran);
            await this.$store.dispatch('userAccses/getUserAccess');
            this.dataAccsess = await this.$store.getters['userAccses/userAccsess'];
            await this.$store.dispatch('transaksi/setTransaksi', this.dataAccsess)
            // this.transaksi = 
            let dataTransaksi = await this.$store.getters['transaksi/outcome'];
            for (let i = 0; i < dataTransaksi.length; i++) {
                for (let x in this.transaksi.category) {
                    if (x == "food_and_dining") {
                        x = "food & dining";
                    } else if (x == "shopping") {
                        x = "Shopping";
                    }
                    if (dataTransaksi[i].category.classification_group == x) {
                        if (x == "food & dining") {
                            x = "food_and_dining";
                        } else if (x == "Shopping") {
                            x = "shopping";
                        }
                        this.transaksi.category[x] += dataTransaksi[i].amount;
                    }
                }
            }
        },
        async aktivitasTransaksi() {
            await this.dataPemasukan.forEach(element => {
                this.dataAktivitasTransaksi.push(element)
            });

            await this.dataPengeluaran.forEach(element => {
                this.dataAktivitasTransaksi.push(element)
            });

            this.dataAktivitasTransaksi = this.dataAktivitasTransaksi.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            }).reverse().slice(0, 5)
        },
        async balanceWallet() {
            await this.$store.dispatch('balance/getTsrf', this.dataAccsess.tsrf)
            this.tsrf = await this.$store.getters['balance/tsrf']
            await this.$store.dispatch('balance/getGopay', this.dataAccsess.gopay)
            this.gopay = await this.$store.getters['balance/gopay']
            await this.$store.dispatch('balance/getOvo', this.dataAccsess.ovo)
            this.ovo = await this.$store.getters['balance/ovo']
        },
        async hitung(data) {
            let total = 0;
            data.forEach(element => {
                element.amount = parseInt(element.amount)
                total += element.amount
            });
            return total
        },
        async getBudget() {
            try {
                await this.$store.dispatch('budget/getBudget');
                this.budget = this.$store.getters['budget/getBudget'];
            } catch (error) {
                console.log(error.message);
            }
        },
        changeDateFormat(date) {
            return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
        },
        rupiahFormat(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
        totalPengeluaran() {
            let total = 0;
            for (let x in this.transaksi.category) {
                total += this.transaksi.category[x];
            }
            return total;
        },
        sisaBudget() {
            let total = 0;
            for (let x in this.budget.category) {
                total += this.budget.category[x];
            }
            this.sisa = total - this.totalPengeluaran();
            return total - this.totalPengeluaran();
        },
        progressBar(){
            let b = this.budget.budget
            let a = this.sisa
            return (((a/b)*100));
        }
    },
    async created() {
        this.isLoading = true;
        await this.revenueMoney();
        await this.getBudget();
        this.isLoading = false;
    }
}
</script>

<style scoped>
.bg-up-logo-green {
    background-color: #71D4A6;
}

.bg-gopay {
    background-image: url('../assets/gopay_bg.jpg');
}

.bg-ovo {
    background-image: url('../assets/ovo_bg.jpg');
    background-size: cover;
}

#gopay {
    background-image: url('../assets/gopay_bg.jpg');
    background-size: cover;
}

.text-history-blue {
    color: #273A7D;
}

#riwayat-transaksi {
    background-image: url("../assets/bg\ riwayat\ transaksi.png");
}

.bg-history-blue {
    background-color: #273A7D;
}

.text-history-blue {
    color: #273A7D;
}

.text-light-blue {
    color: #1D2E6C;
}

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>