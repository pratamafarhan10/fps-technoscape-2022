<template>
    <div>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">
            <div class="text-2xl font-bold	">
                Budgetips
            </div>
            <div class="font-light">
                Isi form dibawah ini agar kamu bisa menyesuaikan dengan apa yang kamu butuhkan!
            </div>
            <div>
                <div class="card bg-blue-900 border border-gray-500">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white text-lg">Berapa budgetmu?</span>
                            </label>
                            <label class="input-group">
                                <span class="text-history-blue">Rp</span>
                                <input type="number" placeholder="Tulis nominal..." class="input input-bordered w-full text-black"
                                    v-model="budget_nominal" />
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white text-lg">Pilih Kota tinggal / tujuan</span>
                            </label>
                            <select class="select select-bordered text-history-blue" v-model="kota">
                                <option value="bandung">Bandung</option>
                                <option value="jakarta">Jakarta</option>
                                <option value="surabaya">Surabaya</option>
                            </select>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-white text-lg">Kamu ini adalah</span>
                            </label>
                            <select class="select select-bordered text-history-blue" v-model="tipe">
                                <option value="anak_kosan">Anak kosan (1jt - 3jt)</option>
                                <option value="mapan">Mapan tapi Single (4jt - 9jt)</option>
                                <option value="berkeluarga">Sudah berkeluarga (4jt - 16jt)</option>
                                <option value="pensiunan">Pensiunan (4jt - 16jt)</option>
                                <option value="jalan_jalan">Mau jalan-jalan aja</option>
                            </select>
                        </div>

                        <div class="mt-5">
                            <router-link :to="{ name: 'rekomendasi budget', params: { budget: budget_nominal, tipe: tipe, kota: kota} }">
                                <button class="btn bg-orange-400 hover:bg-orange-500 hover:border-orange-500 w-full">
                                    Cari Rekomendasi Budgeting
                                </button>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- end history header -->


        <!-- budget menetap/singgah -->
        <div class="flex justify-center">
            <font-awesome-icon icon="fa-solid fa-sort-down" class="text-gray-500 text-2xl" />
        </div>
        <div class="px-5">
            <div class="grid grid-cols-2 gap-12 mt-7 border-b border-b-gray-300 py-3">
                <div class="text-gray-400 text-end text-2xl cursor-pointer" :class="{
                    'text-history-blue': currentTab == 'budget menetap',
                    'font-bold': currentTab == 'budget menetap'
                }" @click="currentTab = 'budget menetap'">
                    Budget Menetap
                </div>
                <div class="text-gray-400 text-2xl cursor-pointer" :class="{
                    'text-history-blue': currentTab == 'budget singgah',
                    'font-bold': currentTab == 'budget singgah'
                }" @click="currentTab = 'budget singgah'">
                    Budget Singgah
                </div>
            </div>
        </div>

        <div class="px-5 mt-5">
            <div class="text-xl font-bold text-history-blue">
                Rekomendasi kota terpopuler
            </div>
            <div class="text-gray-500">
                {{ currentTab == 'budget menetap' ? 'Ini adalah budgeting perbulan, yang sesuai dengan kota yang kamu tinggali' : 'Ini adalah budgeting perhari, yang sesuai dengan kota yang ingin kamu singgahi' }}
            </div>

            <!-- card Kota Bandung -->
            <div class="mt-5">
                <div class="card bg-white border border-gray-300">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-12">
                                <div class="col-span-2">
                                    <img src="../assets/bandung.png" class="w-20 h-20" alt="">
                                </div>
                                <div class="col-span-8 flex flex-col justify-center">
                                    <div class="text-xl text-history-blue font-semibold">Kota Bandung</div>
                                    <div class="text-gray-500 text-lg">{{ currentTab == 'budget menetap' ? 'Umr ' + rupiahFormat(budgetTemplate.bandung.umr) : 'Staycation, backpacker, dll' }}</div>
                                </div>
                                <div class="col-span-2 flex justify-end items-center">
                                    <router-link :to="{ name: 'create budget' }">
                                        <font-awesome-icon icon="fa-solid fa-angle-right"
                                            class="w-10 h-10 bg-history-blue rounded-full text-white" />
                                    </router-link>
                                </div>
                            </div>
                            <div class="mt-3 py-5 px-3 bg-blue-50 rounded-lg">
                                <div class="text-gray-500">
                                    
                                    {{ currentTab == 'budget menetap' ? 'Biaya hidup perbulan :' : 'Biaya singgah perhari :' }}
                                </div>
                                <div class="text-2xl mt-2 text-history-blue font-bold">
                                    {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.bandung.anak_kosan.menetap.biaya_hidup_perbulan.from) : rupiahFormat(budgetTemplate.bandung.anak_kosan.singgah.biaya_singgah.from)}} - {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.bandung.anak_kosan.menetap.biaya_hidup_perbulan.to) : rupiahFormat(budgetTemplate.bandung.anak_kosan.singgah.biaya_singgah.to) }} ++
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- end card kota -->

            <!-- card Kota jakarta -->
            <div class="mt-5">
                <div class="card bg-white border border-gray-300">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-12">
                                <div class="col-span-2">
                                    <img src="../assets/jakarta.png" class="w-20 h-20" alt="">
                                </div>
                                <div class="col-span-8 flex flex-col justify-center">
                                    <div class="text-xl text-history-blue font-semibold">DKI Jakarta</div>
                                    <div class="text-gray-500 text-lg">{{ currentTab == 'budget menetap' ? 'Umr ' + rupiahFormat(budgetTemplate.jakarta.umr) : 'Staycation, backpacker, dll' }}</div>
                                </div>
                                <div class="col-span-2 flex justify-end items-center">
                                    <router-link :to="{ name: 'create budget' }">
                                        <font-awesome-icon icon="fa-solid fa-angle-right"
                                            class="w-10 h-10 bg-history-blue rounded-full text-white" />
                                    </router-link>
                                </div>
                            </div>
                            <div class="mt-3 py-5 px-3 bg-blue-50 rounded-lg">
                                <div class="text-gray-500">
                                    
                                    {{ currentTab == 'budget menetap' ? 'Biaya hidup perbulan :' : 'Biaya singgah perhari :' }}
                                </div>
                                <div class="text-2xl mt-2 text-history-blue font-bold">
                                    {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.jakarta.anak_kosan.menetap.biaya_hidup_perbulan.from) : rupiahFormat(budgetTemplate.jakarta.anak_kosan.singgah.biaya_singgah.from)}} - {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.jakarta.anak_kosan.menetap.biaya_hidup_perbulan.to) : rupiahFormat(budgetTemplate.jakarta.anak_kosan.singgah.biaya_singgah.to) }} ++
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- end card kota -->

            <!-- card Kota surabaya -->
            <div class="mt-5">
                <div class="card bg-white border border-gray-300">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-12">
                                <div class="col-span-2">
                                    <img src="../assets/surabaya.png" class="w-20 h-20" alt="">
                                </div>
                                <div class="col-span-8 flex flex-col justify-center">
                                    <div class="text-xl text-history-blue font-semibold">Surabaya</div>
                                    <div class="text-gray-500 text-lg">{{ currentTab == 'budget menetap' ? 'Umr ' + rupiahFormat(budgetTemplate.surabaya.umr) : 'Staycation, backpacker, dll' }}</div>
                                </div>
                                <div class="col-span-2 flex justify-end items-center">
                                    <router-link :to="{ name: 'create budget' }">
                                        <font-awesome-icon icon="fa-solid fa-angle-right"
                                            class="w-10 h-10 bg-history-blue rounded-full text-white" />
                                    </router-link>
                                </div>
                            </div>
                            <div class="mt-3 py-5 px-3 bg-blue-50 rounded-lg">
                                <div class="text-gray-500">
                                    
                                    {{ currentTab == 'budget menetap' ? 'Biaya hidup perbulan :' : 'Biaya singgah perhari :' }}
                                </div>
                                <div class="text-2xl mt-2 text-history-blue font-bold">
                                    {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.surabaya.anak_kosan.menetap.biaya_hidup_perbulan.from) : rupiahFormat(budgetTemplate.surabaya.anak_kosan.singgah.biaya_singgah.from)}} - {{ currentTab == 'budget menetap' ? rupiahFormat(budgetTemplate.surabaya.anak_kosan.menetap.biaya_hidup_perbulan.to) : rupiahFormat(budgetTemplate.surabaya.anak_kosan.singgah.biaya_singgah.to) }} ++
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- end card kota -->
            

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'budget menetap',
            budget_nominal: 0,
            kota: 'bandung',
            tipe: 'anak_kosan',
            budgetTemplate: {
                jakarta: {
                    umr: 0,
                    anak_kosan: {
                        menetap: {
                            biaya_hidup_perbulan: {
                                from: 0,
                                to: 0
                            }
                        },
                        singgah: {
                            biaya_singgah: {
                                from: 0,
                                to: 0
                            }
                        }
                    }
                },
                bandung: {
                    umr: 0,
                    anak_kosan: {
                        menetap: {
                            biaya_hidup_perbulan: {
                                from: 0,
                                to: 0
                            }
                        },
                        singgah: {
                            biaya_singgah: {
                                from: 0,
                                to: 0
                            }
                        }
                    }
                },
                surabaya: {
                    umr: 0,
                    anak_kosan: {
                        menetap: {
                            biaya_hidup_perbulan: {
                                from: 0,
                                to: 0
                            }
                        },
                        singgah: {
                            biaya_singgah: {
                                from: 0,
                                to: 0
                            }
                        }
                    }
                },
            }
        }
    },
    methods: {
        async getBudgetTemplate(){
            try {
                await this.$store.dispatch('budget/getBudgetTemplate', {
                    tipe: false,
                    kota: false,
                });
                this.budgetTemplate = this.$store.getters['budget/getBudgetTemplate'];
            }catch(error){
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
    async created(){
        await this.getBudgetTemplate();
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

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>