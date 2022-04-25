<template>
<HeaderMenu/>
    <div class="register update">
 
    <input type="text" v-model="resturant.name"  placeholder="Enter Resturant Name"/>
      <button v-on:click="updateQuery" > Update</button>
        
</div>
</template>

<script>
import HeaderMenu from "./Header.vue"
import axios from "axios"
export default {
  name:"UpdatePage",
  components:{
      HeaderMenu
  },
  data(){
    return{
    resturant:{
      name:""
    }
  }},
  methods:{
 async updateQuery(){
    let result =  await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,
    {name:this.resturant.name})
     if(result.status=="200"){
       this.$router.push({name:"HomePage"})
     }

  
  }
  },
  async mounted() {
   

      let result = await axios.get("http://localhost:3000/resturant/" + this.$route.params.id)
     if (result?.status=="200"){
        this.resturant.name=result?.data.name
     }

  }
}
</script>
<style scoped>
.update{
  margin-top: 100px;
}
</style>