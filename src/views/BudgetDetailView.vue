<template>
    <div>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">
            <div class="grid grid-cols-10 gap-4">
                <div class="flex justify-end items-center">
                    <router-link :to="{ name: 'budget' }">
                        <div class="py-2 px-4 bg-white rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-black" />
                        </div>
                    </router-link>
                </div>
                <div class="col-span-8 text-2xl font-semibold flex items-center">
                    Detail Budgeting
                </div>
            </div>

            <div class="card bg-white border border-gray-200">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-blue-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200" :class="{
                            'bg-blue-100': category == 'transportation',
                            'bg-green-100': category == 'food_and_dining',
                            'bg-sky-100': category == 'education',
                            'bg-orange-100': category == 'shopping',
                            'bg-indigo-100': category == 'health_and_fitness',
                            'bg-teal-100': category == 'investment',
                        }">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-16 h-16 bg-blue-200 flex justify-center items-center rounded-lg" :class="{
                                    'bg-blue-200': category == 'transportation',
                                    'bg-green-200': category == 'food_and_dining',
                                    'bg-sky-200': category == 'education',
                                    'bg-orange-200': category == 'shopping',
                                    'bg-indigo-200': category == 'health_and_fitness',
                                    'bg-teal-200': category == 'investment',
                                }">
                                    <font-awesome-icon icon="fa-solid fa-bus" class="w-8 h-8 text-blue-800" :class="{
                                        'text-blue-800': category == 'transportation',
                                        'text-green-800': category == 'food_and_dining',
                                        'text-sky-800': category == 'education',
                                        'text-orange-800': category == 'shopping',
                                        'text-indigo-800': category == 'health_and_fitness',
                                        'text-teal-800': category == 'investment',
                                    }" />
                                </div>
                            </div>
                            <div class="col-span-8">
                                <div class="text-2xl text-black font-bold">{{ categoryName }}</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">{{ rupiahFormat(budget.category[category]) }}</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- Rp. 600.000</div>
                            </div>
                        </div>
                        <div class="p-8" :class="{
                            'bg-blue-100': category == 'transportation',
                            'bg-green-100': category == 'food_and_dining',
                            'bg-sky-100': category == 'education',
                            'bg-orange-100': category == 'shopping',
                            'bg-indigo-100': category == 'health_and_fitness',
                            'bg-teal-100': category == 'investment',
                        }">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-black font-medium">Sisa Budget</div>
                                <div class="text-lg text-end font-semibold" :class="{
                                    'text-blue-800': category == 'transportation',
                                    'text-green-800': category == 'food_and_dining',
                                    'text-sky-800': category == 'education',
                                    'text-orange-800': category == 'shopping',
                                    'text-indigo-800': category == 'health_and_fitness',
                                    'text-teal-800': category == 'investment',
                                }">Rp. 200.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end history header -->

        <div class="mt-5 px-5">

            <!-- pengeluaran pemasukan -->
            <div class="grid grid-flow-row auto-rows-auto mt-3">

                <!-- tanggal pengeluaran/pemasukan -->
                <div class="text-gray-500 font-semibold">
                    Hari ini, 18 sept 2019
                </div>
                <!-- end tanggal pengeluaran/pemasukan -->

                <div class="mt-4">
                    <div class="card w-full bg-white border border-gray-300">
                        <div class="card-body">

                            <!-- pengeluaran/pemasukannya -->
                            <div class="grid grid-cols-9 border-b border-b-gray-200 py-2">
                                <div class="w-14 h-14">
                                    <div class="bg-blue-200 rounded-lg p-2 flex justify-center">
                                        <img src="../assets/gopay_logo.png" alt="">
                                    </div>
                                </div>
                                <div class="col-span-4 grid grid-flow-row auto-rows">
                                    <div class="text-lg font-bold text-black">Makan Siang</div>
                                    <div class="text-gray-400 font-semibold">Food</div>
                                </div>
                                <div class="col-span-4 grid grid-flow-row auto-rows text-end">
                                    <div class="text-lg font-bold" :class="{
                                        'text-red-500': currentTab == 'pengeluaran',
                                        'text-green-500': currentTab == 'pemasukan',
                                    }">
                                        -Rp 25.000
                                    </div>
                                    <div class="text-gray-500">18 sept 2019</div>
                                </div>
                            </div>
                            <!-- end of pengeluaran/pemasukan -->



                        </div>
                    </div>

                </div>
            </div>
            <!-- end pengeluaran pemasukan -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
            budget: {
                category: {
                    transportation: 0,
                    food_and_dining: 0,
                    education: 0,
                    shopping: 0,
                    health_and_fitness: 0,
                    investment: 0,
                },
                budget: 0
            }
        }
    },
    computed: {
        categoryName() {
            if (this.category == 'transportation' || this.category == 'education' | this.category == 'shopping' | this.category == 'investment') {
                return this.category
            } else if (this.category == 'food_and_dining') {
                return 'Food & Dining'
            } else {
                return 'Health & Fitness'
            }
        }
    },
    methods: {
        async getBudget() {
            try {
                await this.$store.dispatch('budget/getBudget');
                this.budget = this.$store.getters['budget/getBudget'];
            } catch (error) {
                console.log(error.message);
            }
        },
        rupiahFormat(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
    },
    created() {
        console.log(this.category);
        this.getBudget();
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