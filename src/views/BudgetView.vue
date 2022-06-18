<template>
    <div>
        <!-- history header -->
        <div class="grid grid-flow-row auto-rows-auto bg-history-blue px-5 py-5 min-h-content text-white gap-4"
            id="riwayat-transaksi">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-2xl font-bold	">
                    <select class="select w-full bg-transparent border-none max-w-xs">
                        <option class="bg-history-blue">June 2022</option>
                        <option class="bg-history-blue">Mei 2022</option>
                    </select>

                </div>
                <div class="flex justify-end items-center">
                    <div class="py-2 px-4 bg-white rounded-lg">
                        <font-awesome-icon icon="fa-solid fa-plus" class="text-black" />
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-row auto-rows-auto">
                <div class="text-md">
                    Sisa Total Budget
                </div>
                <div class="font-bold text-4xl">
                    Rp. 450.000
                </div>
            </div>
            <div>
                <div class="card bg-white">
                    <div class="card-body">
                        <div class="grid grid-flow-row auto-rows-auto">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <div class="text-gray-500">Pengeluaran</div>
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

        <!-- budgets -->
        <div class="px-5 mt-5">
            <div class="card bg-white border border-gray-200">
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
                                <div class="text-lg text-gray-500 text-end font-semibold">Rp. 800.000</div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-5">
                                <div class="text-lg text-gray-500">Terpakai</div>
                                <div class="text-lg text-gray-500 text-end font-semibold">- Rp. 600.000</div>
                            </div>
                            <div class="text-light-blue text-lg font-semibold text-center mt-5">
                                <router-link to="/">
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