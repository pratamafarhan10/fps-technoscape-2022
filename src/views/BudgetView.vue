<template>
    <div>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <select class="select w-full bg-transparent border-none max-w-xs">
                        <option class="bg-history-blue">June 2022</option>
                        <option class="bg-history-blue">Mei 2022</option>
                    </select>
                </div>
                <div class="flex justify-end items-center">
                    <router-link :to="{ name: 'pilih tipe budget' }">
                        <div class="py-2 px-4 bg-white rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-plus" class="text-black" />
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="grid grid-flow-row auto-rows-auto">
                <div class="text-md">
                    Sisa Total Budget
                </div>
                <div class="font-bold text-4xl">
                   {{rupiahFormat(sisaBudget())}}
                </div>
            </div>
            <div>
                <div class="card bg-white">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <div class="text-gray-500">Pengeluaran</div>
                                    <div class="text-black font-bold text-2xl">{{rupiahFormat(totalPengeluaran())}}</div>
                                </div>
                                <div>
                                    <div class="text-gray-500">Budget Bulanan</div>
                                    <div class="text-black font-bold text-2xl">{{ rupiahFormat(budget.budget) }}</div>
                                </div>
                            </div>
                            <div class="mt-2">
                                <progress class="progress progress-error" value="50" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end history header -->

        <!-- budgets -->
        <div class="px-5 mt-5">

            <!-- transportasi -->
            <div class="card bg-white border border-gray-200" v-if="budget.category.transportation !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-blue-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bus" class="w-8 h-8 text-blue-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Transportasi</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">Rp. 200.000</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.transportation)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- Rp. 600.000</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'transportation' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- food -->
            <div class="card bg-white border border-gray-200 mt-5" v-if="budget.category.food_and_dining !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-green-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-green-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bowl-food" class="w-8 h-8 text-green-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Food</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">{{rupiahFormat(budget.category.food_and_dining - transaksi.category.food_and_dining)}}</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.food_and_dining)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{rupiahFormat(transaksi.category.food_and_dining)}}</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'food_and_dining' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- education -->
            <div class="card bg-white border border-gray-200 mt-5" v-if="budget.category.education !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-sky-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-sky-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-building-columns"
                                        class="w-8 h-8 text-sky-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Education</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">Rp. 200.000</div>
                            </div>

                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.education)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- {{rupiahFormat(transaksi.category.education)}}</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'education' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- shopping -->
            <div class="card bg-white border border-gray-200 mt-5" v-if="budget.category.shopping !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-orange-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-orange-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bag-shopping"
                                        class="w-8 h-8 text-orange-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Shopping</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">{{rupiahFormat(budget.category.shopping -  transaksi.category.shopping)}}</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.shopping)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">-{{rupiahFormat(transaksi.category.shopping)}}</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'shopping' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- health -->
            <div class="card bg-white border border-gray-200 mt-5" v-if="budget.category.health_and_fitness !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-indigo-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-indigo-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-temperature-empty"
                                        class="w-8 h-8 text-indigo-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Health</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">Rp. 200.000</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.health_and_fitness)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- Rp. 600.000</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'health_and_fitness' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- deposit -->
            <div class="card bg-white border border-gray-200 mt-5" v-if="budget.category.deposit !== 0">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-teal-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-teal-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-sack-dollar" class="w-8 h-8 text-teal-800" />
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-xl font-bold">Deposit</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="text-end text-gray-500">Sisa budget</div>
                                <div class="text-end text-xl font-bold">{{rupiahFormat(budget.category.deposit - transaksi.category.deposit )}}</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{
                                        rupiahFormat(budget.category.deposit)
                                }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">-{{ rupiahFormat(transaksi.category.deposit)}}</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link :to="{ name: 'budget detail', params: { category: 'deposit' } }">
                                    Lihat Detail
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            dataAccsess: []
        }
    },
    methods: {
        async getBudget() {
            try {
                await this.$store.dispatch('budget/getBudget');
                this.budget = this.$store.getters['budget/getBudget'];
                await this.getTransaksi();
            } catch (error) {
                console.log(error.message);
            }
        },
        async getTransaksi() {
            try {
                await this.$store.dispatch('userAccses/getUserAccess');
                this.dataAccsess =  await this.$store.getters['userAccses/userAccsess'];            
                await this.$store.dispatch('transaksi/setTransaksi', this.dataAccsess)
                // this.transaksi = 
                let dataTransaksi = await this.$store.getters['transaksi/outcome'];
                for(let i = 0; i < dataTransaksi.length; i++) {
                    for(let x in this.transaksi.category) {
                        if(x == "food_and_dining") {
                            x = "food & dining";
                        }else if(x == "shopping") {
                            x = "Shopping";
                        }
                        if(dataTransaksi[i].category.classification_group == x){
                            if(x == "food & dining") {
                                x = "food_and_dining";
                            }else if(x == "Shopping") {
                                x = "shopping";
                            }
                            this.transaksi.category[x] += dataTransaksi[i].amount;
                        }
                    }
                }
            }
            catch (error) {
                console.log(error.message);
            }
        },
        totalPengeluaran(){
            let total =  0;
            for (let x in this.transaksi.category) {
                total += this.transaksi.category[x];
            }
            return total;
        },
        sisaBudget(){
            let total =  0;
            for (let x in this.budget.category) {
                total += this.budget.category[x];
            }
            return total - this.totalPengeluaran();
        },
        rupiahFormat(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
    },
    async created() {
        await this.getBudget();
    }
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

.text-light-blue {
    color: #1D2E6C;
}

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>