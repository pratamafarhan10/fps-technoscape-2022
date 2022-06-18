<template>
    <div class="detail-transaksi mb-10">
        <div class="grid grid-cols-3">
            <div class="grid-rows-4">
                <font-awesome-icon icon="fa-solid fa-money-check" size="8xl"/>
            </div>
            <div class="grid-rows-4">
                <p class="text-2xl">{{classifiation}}</p>
                <p>{{description}}</p>
            </div>
            <div class="grid-rows-4 relative">
                <div class="absolute right-0">
                    <p>Rp. {{convertMoney(amount)}}</p>
                    <p>{{dateFormat(date)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailTransaksi',
    data() {
        return {
            classifiation: "Pembayaran",
            description: "Pembayaran Tagihan Bulan Ini",
            amount: 40000,
            date: "2022-05-06"
        }
    },
    methods: {
        dateFormat: function(date){
            date = date.split("-");
            return date[2] + " " + date[1] + " " + date[0];
        },
        convertMoney: function(balance){
            return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
}
</script>