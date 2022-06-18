<template>
    <div class="px-5 py-5">

        <!-- Header profil -->
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-8">
                <div class="grid-flow-row auto-rows-auto">
                    <div class="text-gray-500">Halo!</div>
                    <div class="text-xl font-semibold">FPS Team Member 1</div>
                </div>
            </div>
            <div class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-bell" class="w-7 h-7 text-gray-500" />
            </div>
            <div class="flex items-center">
                <img src="../assets/pp.png" class="rounded-lg">
            </div>
        </div>
        <!-- End Header profil -->

        <!-- pemasukan dan pengeluaran -->
        <div class="grid grid-cols-2 mt-5 border border-gray-200 rounded-lg bg-white">
            <div class="border-r border-r-gray-200 grid-flow-row auto-rows-auto p-3">
                <div class="flex items-center">
                    <font-awesome-icon icon="fa-solid fa-arrow-down"
                        class="mr-2 bg-up-logo-green text-white p-1 rounded-md" />
                    <span class="text-gray-500">Pemasukan</span>
                </div>
                <div class="mt-2 text-xl font-bold text-black">Rp. 123.000.000</div>
            </div>
            <div class="grid-flow-row auto-rows-auto p-3">
                <div class="flex items-center">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"
                        class="mr-2 bg-red-500 text-white p-1 rounded-md" />
                    <span class="text-gray-500">Pengeluaran</span>
                </div>
                <div class="mt-2 text-xl font-bold text-black">Rp. 450.000</div>
            </div>
        </div>
        <!-- end pemasukan dan pengeluaran -->

        <!-- Bank -->
        <div class="mt-5">
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
        <div class="grid-flow-row auto-rows-auto mt-10">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-gray-500 text-xl">Transaksi terbaru</div>
                <div class="text-history-blue font-bold text-xl text-end">Lihat semua</div>
            </div>
            <div class="mt-4">
                <!-- card pengeluaran pemasukan -->
                    <div class="card w-full bg-white shadow-xl border border-gray-300">
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
</style>