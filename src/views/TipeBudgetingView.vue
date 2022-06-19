<template>
    <div class="grid grid-flow-row auto-rows-auto">
        <div class="h-80 bg-tipe-budgeting p-5">
            <div class="flex justify-start items-center">
                <router-link :to="{ name: 'budget' }">
                    <div class="py-2 px-4 bg-white rounded-lg">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-black" />
                    </div>
                </router-link>
            </div>
        </div>
        <div class="bg-tipe-budgeting min-h-full">
            <div class="rounded-t-3xl bg-white px-5 py-5">
                <div class="text-3xl text-center font-semibold text-black">
                    Tipe Budget-ers seperti
                </div>
                <div class="text-3xl text-center font-semibold text-black">
                    apa sih kamu?
                </div>
                <div class="mt-5">
                    <!-- Beginner -->
                    <div class="card bg-white border border-2 border-dashed border-violet-700">
                        <div class="card-body">
                            <div class="grid grid-flow-row auto-rows-auto">
                                <div class="grid grid-cols-5 gap-4">
                                    <div class="col-span-1 flex justify-center items-center w-16 h-16">
                                        <img src="../assets/female_memojis.png" alt=""
                                            class=" bg-indigo-200 rounded-full text-white">
                                    </div>
                                    <div class="col-span-4 text-2xl text-black font-semibold flex items-center">
                                        Beginner Budgeters
                                    </div>
                                </div>
                                <div class="grid grid-cols-5 gap-4 mt-4">
                                    <div class="col-span-4 text-gray-500">
                                        Belum bisa ngatur keuangan? pakai template dan rekomendasi kita aja!
                                    </div>
                                    <div class="col-span-1 flex justify-end items-center">
                                        <router-link :to="{ name: 'budgetips' }">
                                            <font-awesome-icon icon="fa-solid fa-angle-right"
                                                class="w-10 h-10 bg-indigo-500 rounded-full text-white" />
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end beginner -->

                    <!-- Pro -->
                    <div class="card bg-white border border-2 border-dashed border-orange-700 mt-5">
                        <div class="card-body">
                            <div class="grid grid-flow-row auto-rows-auto">
                                <div class="grid grid-cols-5 gap-4">
                                    <div class="col-span-1 flex justify-center items-center w-16 h-16">
                                        <img src="../assets/male_memojis.png" alt=""
                                            class=" bg-orange-200 rounded-full text-white">
                                    </div>
                                    <div class="col-span-4 text-2xl text-black font-semibold flex items-center">
                                        Pro Budgeters
                                    </div>
                                </div>
                                <div class="grid grid-cols-5 gap-4 mt-4">
                                    <div class="col-span-4 text-gray-500">
                                        Belum bisa ngatur keuangan? pakai template dan rekomendasi kita aja!
                                    </div>
                                    <div class="col-span-1 flex justify-end items-center">
                                        <router-link :to="{ name: 'create budget' }">
                                            <font-awesome-icon icon="fa-solid fa-angle-right"
                                                class="w-10 h-10 bg-orange-500 rounded-full text-white" />
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end Pro -->

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.bg-tipe-budgeting {
    background-image: url("../assets/bg_tipe_budgeting.png");
    background-size: cover;
}
</style>>
