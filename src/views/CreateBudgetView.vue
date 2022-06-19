<template>
    <div class="p-5">
        <div class="card bg-white">
            <div class="card-body">
                <div class="grid grid-cols-10">
                    <div class="col-span-9">
                        <progress class="progress progress-warning" :value="progress" max="100"></progress>
                    </div>
                    <div class="text-end">
                        <router-link :to="{ name: 'budget' }">
                            <font-awesome-icon icon="fa-solid fa-x" class="w-5 h-5" />
                        </router-link>
                    </div>
                </div>

                <!-- tanya budget -->
                <span v-if="currentStep == 1">
                    <div class="text-lg font-semibold">
                        Berapa Budget mu untuk 1 bulan?
                    </div>
                    <div class="mt-5">
                        <div class="form-control">
                            <label class="input-group">
                                <span>Rp</span>
                                <input type="number" placeholder="Tulis nominal..." class="input input-bordered w-full"
                                    v-model="budget_nominal" />
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-end mt-5">
                        <button class="btn bg-light-blue hover:bg-indigo-900" @click="nextStep">Selanjutnya</button>
                    </div>
                </span>
                <!-- end tanya budget -->

                <!-- pilih kategori -->
                <span v-if="currentStep == 2">
                    <div class="text-lg font-semibold">
                        Mau di bagi ke mana aja nih?
                    </div>
                    <div class="text-sm text-gray-400">
                        *bisa pilih lebih dari 1 kategori
                    </div>

                    <!-- transportation -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-blue-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bus" class="w-8 h-8 text-blue-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Transportation
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" value="transportation"
                                    v-model="category" />
                            </div>
                        </div>
                    </div>

                    <!-- food -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-green-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-green-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bowl-food" class="w-8 h-8 text-green-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Food
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" value="food_and_dining"
                                    v-model="category" />
                            </div>
                        </div>
                    </div>

                    <!-- education -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-sky-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-sky-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-building-columns"
                                        class="w-8 h-8 text-sky-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Education
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" value="education" v-model="category" />
                            </div>
                        </div>
                    </div>

                    <!-- shopping -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-orange-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-orange-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bag-shopping"
                                        class="w-8 h-8 text-orange-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Shopping
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" value="shopping" v-model="category" />
                            </div>
                        </div>
                    </div>

                    <!-- health -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-indigo-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-indigo-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-temperature-empty"
                                        class="w-8 h-8 text-indigo-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Health
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" value="health_and_fitness"
                                    v-model="category" />
                            </div>
                        </div>
                    </div>

                    <!-- investing -->
                    <div class="mt-5">
                        <div class="p-4 rounded-lg bg-teal-100 grid grid-cols-10">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-teal-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-sack-dollar" class="w-8 h-8 text-teal-800" />
                                </div>
                            </div>
                            <div class="col-span-6 flex items-center text-2xl font-semibold">
                                Investment
                            </div>
                            <div class="col-span-2 flex items-center justify-end">
                                <input type="checkbox" class="checkbox bg-white" id="investment" value="investment"
                                    v-model="category" />
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end mt-5">
                        <button class="btn bg-light-blue hover:bg-indigo-900" @click="nextStep">Selanjutnya</button>
                    </div>
                </span>
                <!-- end pilih kategori -->

                <!-- isi nominal kategori -->
                <span v-if="currentStep == 3">
                    <div class="text-lg font-semibold">
                        Isi Nominal Kategorinya ya!
                    </div>
                    <div class="text-sm text-gray-400">
                        Budget bulan ini: <span class="text-light-blue font-bold">{{ rupiahFormat(budget_nominal)
                        }}</span>
                    </div>
                    <div class="mt-5">

                        <!-- transportation -->
                        <div class="card bg-white border border-gray-300 mt-5"
                            v-if="category.includes('transportation')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bus"
                                                    class="w-8 h-8 text-blue-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Transportation
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full" v-model="budget.transportation" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- food -->
                        <div class="card bg-white border border-gray-300 mt-5"
                            v-if="category.includes('food_and_dining')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-green-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bowl-food"
                                                    class="w-8 h-8 text-green-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Food
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full" v-model="budget.food_and_dining" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- education -->
                        <div class="card bg-white border border-gray-300 mt-5" v-if="category.includes('education')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-sky-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bowl-food"
                                                    class="w-8 h-8 text-sky-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Education
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full" v-model="budget.education" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- shopping -->
                        <div class="card bg-white border border-gray-300 mt-5" v-if="category.includes('shopping')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-orange-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bowl-food"
                                                    class="w-8 h-8 text-orange-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Shopping
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full" v-model="budget.shopping" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- health -->
                        <div class="card bg-white border border-gray-300 mt-5"
                            v-if="category.includes('health_and_fitness')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-indigo-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bowl-food"
                                                    class="w-8 h-8 text-indigo-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Health
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full"
                                                v-model="budget.health_and_fitness" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- investing -->
                        <div class="card bg-white border border-gray-300 mt-5" v-if="category.includes('investment')">
                            <div class="card-body">
                                <div class="grid grid-flow-row auto-rows-auto">
                                    <div class="grid grid-cols-10">
                                        <div class="col-span-2">
                                            <div
                                                class="w-14 h-14 bg-teal-200 flex justify-center items-center rounded-lg">
                                                <font-awesome-icon icon="fa-solid fa-bowl-food"
                                                    class="w-8 h-8 text-teal-800" />
                                            </div>
                                        </div>
                                        <div class="col-span-8 flex items-center text-2xl font-semibold">
                                            Investment
                                        </div>
                                    </div>
                                    <div class="form-control mt-3">
                                        <label class="input-group">
                                            <span>Rp</span>
                                            <input type="number" placeholder="Tulis nominal..."
                                                class="input input-bordered w-full" v-model="budget.investment" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="text-red-400 text-center mt-5" v-if="isTotalBudgetMoreThanNominal">
                            <font-awesome-icon icon="fa-solid fa-circle-exclamation" /> Oops! ini melebihi budget mu!
                            atur lagi agar sesuai ya..
                        </div>




                    </div>
                    <div class="flex justify-between mt-5">
                        <button class="bg-white text-light-blue font-semibold" @click="prevStep">Sebelumnya</button>
                        <button class="btn bg-light-blue hover:bg-indigo-900" @click="nextStep">Selanjutnya</button>
                    </div>
                </span>
                <!-- end isi nominal kategori -->

                <!-- menerapkan tiap bulan -->
                <span v-if="currentStep == 4">
                    <div class="text-lg font-semibold">
                        Apakah kamu mau menerapkan budget ini setiap bulan?
                    </div>
                    <div class="mt-5">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <input type="radio" name="radio-6" class="radio checked:bg-light-blue" value="true" checked v-model="is_every_month" />
                                <span class="label-text">Ya, terapkah setiap bulan</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <input type="radio" name="radio-6" class="radio checked:bg-light-blue" value="false" v-model="is_every_month" />
                                <span class="label-text">Tidak, terapkah hanya bulan ini saja</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-between mt-5">
                        <button class="bg-white text-light-blue font-semibold" @click="prevStep">Sebelumnya</button>
                        <button class="btn bg-light-blue hover:bg-indigo-900" @click="createBudget" :class="{ 'loading': isLoading }">{{ isLoading ? 'Loading' : 'Buat Budgeting' }}</button>
                    </div>
                </span>
                <!-- end menerapkan tiap bulan -->

                <!-- menerapkan tiap bulan -->
                <span v-if="currentStep == 5">
                    <div class="text-3xl text-light-blue font-bold text-center">Yeay, Selamat Budgeting!</div>
                    <div class="text-gray-500 text-center mt-3">Pengaturan / post budgeting kamu sudah di atur untuk
                        sebulan ke depan.</div>
                    <div class="mt-5">
                        <router-link :to="{ name: 'budget' }">
                            <button class="btn btn-warning w-full">Ok, lihat budgeting</button>
                        </router-link>
                    </div>
                </span>
                <!-- end menerapkan tiap bulan -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1,
            progress: 0,
            budget_nominal: 0,
            category: [],
            budget: {
                transportation: 0,
                food_and_dining: 0,
                education: 0,
                shopping: 0,
                health_and_fitness: 0,
                investment: 0,
            },
            is_every_month: true,
            isLoading: false,
        }
    },
    computed: {
        isTotalBudgetMoreThanNominal() {
            let total = this.budget.transportation + this.budget.food_and_dining + this.budget.education + this.budget.shopping + this.budget.health_and_fitness + this.budget.investment;

            if (total > this.budget_nominal) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        nextStep() {
            this.currentStep++;
            this.progress += 25;
        },
        prevStep() {
            this.currentStep--;
            this.progress -= 25;
        },
        rupiahFormat(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(number);
        },
        async createBudget(){
            this.isLoading = true;
            try {
                let dateObj = new Date();
                let year = dateObj.getUTCFullYear();
                let month = dateObj.getUTCMonth() + 1
                await this.$store.dispatch('budget/createBudget', {
                    budget_nominal: this.budget_nominal,
                    category: this.budget,
                    kota: null,
                    is_every_month: this.is_every_month,
                    bulan: `${year}-${month}`,
                });
                this.nextStep();
            }catch(error){
                console.log(error.message);
            }
            this.isLoading = false;
        }
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

.bg-light-blue {
    background-color: #1D2E6C;
}

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>