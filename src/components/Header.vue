<template>
<div class="headerStyle">
    <router-link to="/" class="navlinks">Home</router-link>
    <router-link to="/add" class="navlinks">Todo App</router-link>
    <a href="#"  v-on:click="logout" class="navlinks">Logout</a>
</div>

</template>


<script>


export default {
   name:"HeaderMenu",
   methods:{
       logout(){
           localStorage.clear()
           this.$router.push({name:"Login"})
       }
   }
}

</script>
<style scoped>
.headerStyle{
    overflow: hidden;
    background-color: #333;
}
.headerStyle a{
    float: left;
    color: white;
    text-decoration: none;
    padding: 12px 14px;
    text-align: center;
    font-size: 17px;
}
.headerStyle a:hover{
    background-color: #ddd;
    color:#333;
}
</style>