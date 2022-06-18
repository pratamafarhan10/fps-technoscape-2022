<template>
    <div>

        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">

            <!-- Header profil -->
            <div class="grid grid-cols-10 gap-4">
                <div class="col-span-8">
                    <select class="select w-full bg-transparent border-none max-w-xs">
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
                        <div class="mt-2 text-xl font-bold text-white">Rp. 123.000.000</div>
                    </div>
                </div>

                <div class="py-2 px-5">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="flex items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                                class="mr-2 bg-red-500 text-white p-1 rounded-md" />
                            <span class="text-white">Pengeluaran</span>
                        </div>
                        <div class="mt-2 text-xl font-bold text-white">Rp. 450.000</div>
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
                                    <div class="text-black font-bold text-2xl">Rp. 2.550.000</div>
                                </div>
                                <div>
                                    <div class="text-gray-500">Budget Bulanan</div>
                                    <div class="text-black font-bold text-2xl">Rp. 3.000.000</div>
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

        <!-- Bank -->
        <div class="mt-5 px-5">
            <div class="card bg-sky-800">
                <div class="card-body">
                    <div class="grid-flow-row auto-rows-auto">
                        <div class="grid-flow-row auto-rows-auto">
                            <div class="text-lg text-white font-semibold">Balance</div>
                            <div class="text-white">FPS Team (081312341234)</div>
                        </div>
                        <div class="grid grid-cols-5 gap-4 mt-8">
                            <div class="col-span-3 grid-flow-row auto-rows-auto">
                                <div class="text-2xl text-white font-bold">Rp. 20.000.000</div>
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
        </div>
        <!-- end bank -->


        <!-- Transaksi terbaru -->
        <div class="grid-flow-row auto-rows-auto mt-10 px-5">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-gray-500 text-xl">Transaksi terbaru</div>
                <div class="text-history-blue font-bold text-xl text-end">Lihat semua</div>
            </div>
            <div class="mt-4">
                <!-- card pengeluaran pemasukan -->
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
                                <!-- <div class="text-lg font-bold" :class="{
                                        'text-red-500': currentTab == 'pengeluaran',
                                        'text-green-500': currentTab == 'pemasukan',
                                    }">
                                        -Rp 25.000
                                    </div> -->
                                <div class="text-lg font-bold text-red-500">
                                    -Rp 25.000
                                </div>
                                <div class="text-gray-500">18 sept 2019</div>
                            </div>
                        </div>
                        <!-- end of pengeluaran/pemasukan -->
                    </div>
                </div>
                <!-- end card pengeluaran pemasukan -->
            </div>
        </div>

    </div>
</template>

<style scoped>
.bg-up-logo-green {
    background-color: #71D4A6;
}

.bg-gopay {
    background-image: url('../assets/gopay_bg.jpg');
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