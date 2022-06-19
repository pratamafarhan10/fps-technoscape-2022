<template>
  <div class="grid grid-cols-3 h-screen">
    <div></div>
    <div class="bg-slate-50 flex flex-col justify-between h-screen">
      <div class="overflow-y-auto mb-4">
        <router-view />
      </div>
      <div class="bg-slate-100">
        <ul class="menu menu-horizontal p-2 w-full justify-between">
          <li>
            <router-link :to="{ name: 'home' }">
              <div class="grid grid-flow-row auto-rows-auto flex justify-items-center w-24">
                <font-awesome-icon icon="fa-solid fa-house" class="w-5 h-5 " />
                <div>Home</div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'history' }">
              <div class="grid grid-flow-row auto-rows-auto flex justify-items-center w-24">
                <font-awesome-icon icon="fa-solid fa-money-bill-transfer" class="w-5 h-5 " />
                <div>Transaksi</div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'budget' }">
              <div class="grid grid-flow-row auto-rows-auto flex justify-items-center w-24">
                <font-awesome-icon icon="fa-solid fa-wallet" class="w-5 h-5 " />
                <div>Budgeting</div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'budgetips' }">
              <div class="grid grid-flow-row auto-rows-auto flex justify-items-center w-24">
                <font-awesome-icon icon="fa-solid fa-sack-dollar" class="w-5 h-5 " />
                <div>Budgetips</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      dataAccsess: []
    }
  },
  created() {
    this.$store.dispatch('auth/tryLogin');
  }
}
</script>

<style scoped>
a {
  color: rgb(156 163 175);
}

a:hover {
  background-color: #031A6E !important;
  color: white !important;
}

a.active {
  background-color: #031A6E !important;
  color: white !important;
}
</style>