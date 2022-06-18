<template>
    <div class="home">
        <div class="container mx-auto px-10">
            <div class="grid grid-cols-2">
                <div class="welcome grid-rows-6">
                    <p class="text-xl back">Welcome Back</p>
                    <p class="text-3xl">{{user}}</p>
                </div>
                <div class="grid grid-rows-6 user-kanan">
                    <p class="notif">
                        <font-awesome-icon icon="fa-solid fa-bell" size="2xl"/>
                        <font-awesome-icon class="circle" icon="fa-solid fa-circle" />
                    </p>
                   <p>
                     <font-awesome-icon icon="fa-solid fa-user" size="2xl"/>
                   </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HomePage',
    data(){
        return {
            user: "Barly Vallendito"
        }
    }
}
</script>

<style scoped>
.home{
    color: rgb(252, 254, 255);
    text-align: left;
}

.fa-circle{
    color: red;
}

.notif{
  position: relative;  
}

.circle{
    position: absolute;
    top: -10px;
    margin-left: -5px;
}

.welcome .back{
    color: rgba(252, 254, 255, 0.8);
}

.user-kanan{
    text-align: right;
    display: grid;
    justify-content: end;
    grid-template-columns: 50px 50px; /*Make the grid smaller than the container*/
    gap: 20px;
    padding: 10px;
}

</style>