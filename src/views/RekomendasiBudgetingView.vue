<template>
    <div>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">
            <div class="grid grid-cols-10 gap-4">
                <div class="flex justify-end items-center">
                    <router-link :to="{ name: 'budgetips' }">
                        <div class="py-2 px-4 bg-white rounded-lg">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-black" />
                        </div>
                    </router-link>
                </div>
                <div class="col-span-8 text-2xl font-semibold flex items-center">
                    Rekomendasi Budgeting
                </div>
            </div>
            <div>
                <div class="card bg-white">
                    <div class="card-body">
                        <div class="grid grid-cols-8 gap-4">
                            <div class="col-span-2 rounded-lg flex justify-center items-center bg-blue-50">
                                <img src="../assets/female_memojis_2.png" class="w-20 h-20" alt="">
                            </div>
                            <div class="col-span-6 text-history-blue font-bold text-2xl flex items-center">
                                Anak Kos
                            </div>
                        </div>
                        <div class="mt-3">
                            <span
                                class="px-4 py-2 bg-blue-50 rounded-full font-medium border border-gray-300 text-history-blue text-lg">Rp.
                                3.000.000</span>
                            <span
                                class="px-4 py-2 bg-blue-50 rounded-full font-medium border border-gray-300 text-history-blue text-lg ml-3">Kota
                                Bandung</span>
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
        <!-- end budget menetap/singgah -->

        <!-- rekomendasi -->
        <div class="px-5 mt-5">
            <div class="card bg-white">
                <div class="card-body">
                    <div class="text-gray-400 text-lg">Budget Bulanan</div>
                    <div class="text-2xl text-black font-bold">Rp. 3.000.000</div>
                </div>
            </div>

            <!-- transportasi -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-blue-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bus" class="w-8 h-8 text-blue-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Transportasi</div>
                                <div class="text-blue-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-blue-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Gocar</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sewa Motor</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 35.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- food -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-green-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-green-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bowl-food" class="w-8 h-8 text-green-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Food</div>
                                <div class="text-green-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-green-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sate asin</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 20.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Soto Nanda</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- education -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-sky-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-sky-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-building-columns" class="w-8 h-8 text-sky-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Education</div>
                                <div class="text-sky-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-sky-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sate asin</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 20.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Soto Nanda</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- shopping -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-orange-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-orange-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bag-shopping" class="w-8 h-8 text-orange-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Shopping</div>
                                <div class="text-orange-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-orange-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sate asin</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 20.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Soto Nanda</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- health -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-indigo-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-indigo-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-temperature-empty" class="w-8 h-8 text-indigo-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Health</div>
                                <div class="text-indigo-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-indigo-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sate asin</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 20.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Soto Nanda</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- investing -->
            <div class="card bg-white border border-gray-200 mt-5">
                <div class="card-body p-0">
                    <div class="grid grid-flow-row auto-rows-auto">
                        <div class="bg-teal-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-14 h-14 bg-teal-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-sack-dollar" class="w-8 h-8 text-teal-800" />
                                </div>
                            </div>
                            <div class="col-span-4 flex flex-col justify-between">
                                <div class="text-xl font-semibold">Investment</div>
                                <div class="text-teal-700 font-semibold">
                                    Rp. 50.000
                                </div>
                            </div>
                            <div class="col-span-4 flex justify-end items-center">
                                <div class="text-teal-700 font-bold text-4xl">30%</div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-xl text-black font-semibold">Rekomendasi</div>
                                <div
                                    class="text-lg text-history-blue text-end font-semibold flex items-center justify-end">
                                    Lihat semua
                                    <font-awesome-icon icon="fa-solid fa-angle-right" class="text-history-blue ml-2" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Sate asin</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 20.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Soto Nanda</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 50.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Naik Becak</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 15.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




        <!-- end rekomendasi -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'budget menetap',
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

.bg-up-logo-green {
    background-color: #71D4A6;
}
</style>