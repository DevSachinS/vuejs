<template>
<div class="register">
    <img src="../assets/logo.png"/>
    <input type="text" v-model="name" placeholder="Enter Name"/>
     <input type="text" v-model="email" placeholder="Enter Email "/>
      <input type="password" v-model="password" placeholder="Enter Password"/>
      <button v-on:click="signup" > Signup</button>
          <p><router-link to="/login">Login</router-link></p>
</div>
</template>

<script>

import axios from 'axios';

export default {
 name: 'SignUpPage',
 data(){
     return{
         name:"",
         email:"",
         password:""
     }
 },
 methods:{
     async signup(){
         let result= await axios.post("http://localhost:3000/users",{
             name:this.name,
             email:this.email,
             password:this.password
         })
    
         if(result.status=="201"){
             localStorage.setItem("user-info",JSON.stringify(result.data))
             this.$router.push({name:"HomePage"})
         }
      }
 },
   mounted() {
      let user=localStorage.getItem("user-info")
      if (user){
          this.$router.push({name:"HomePage"})
      }
  }
}
</script>
<style>
.register input{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    height: 40px;
    width: 300px;
    padding-left: 10px;
    border: 1px solid salmon;
}
 .register button{
    width: 310px;
    height: 30px;
    border: none;
    background-color: lightskyblue;
    color: #fff;
    cursor: pointer;
}
</style>