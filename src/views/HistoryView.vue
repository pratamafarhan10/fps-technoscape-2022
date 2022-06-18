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
                    Rp. 450.000
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

                    <!-- tanggal pengeluaran/pemasukan -->
                    <div class="text-gray-500 font-semibold">
                        Hari ini, 18 sept 2019
                    </div>
                    <div class="mt-4">
                        <div class="card w-full bg-base-100 shadow-xl border border-gray-300">
                            <div class="card-body">

                                <!-- pengeluaran/pemasukannya -->
                                <div class="grid grid-cols-9 border-b border-b-gray-300 py-2">
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
            currentTab: 'pengeluaran',
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