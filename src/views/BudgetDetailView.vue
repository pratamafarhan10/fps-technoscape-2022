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
                        <div class="bg-blue-100 py-5 px-5 grid grid-cols-10 gap-4 border-b border-b-gray-200">
                            <div class="col-span-2 flex justify-center">
                                <div class="w-16 h-16 bg-blue-200 flex justify-center items-center rounded-lg">
                                    <font-awesome-icon icon="fa-solid fa-bus" class="w-8 h-8 text-blue-800" />
                                </div>
                            </div>
                            <div class="col-span-8">
                                <div class="text-2xl text-black font-bold">Transportasi</div>
                                <div>
                                    <progress class="progress progress-primary" value="50" max="100"></progress>

                                </div>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-gray-500">Total Budget</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 800.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- Rp. 600.000</div>
                            </div>
                        </div>
                        <div class="p-8 bg-blue-100">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-lg text-black font-medium">Sisa Budget</div>
                                <div class="text-lg text-blue-800 text-end font-semibold">Rp. 200.000</div>
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