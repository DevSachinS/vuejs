<template>
<HeaderMenu/>
    <div>
  <div class="cards">
    <div v-for="items in resturant" :key="items.id" class="card card-1">
    
      <div class="card__icon">  <div id="workingAnimation">
	<span></span>
</div></div>
      <p class="card__exit"></p>
      <h2 class="card__title">{{items.name}}</h2>
      <p class="card__apply">
        <a class="card__link" href="#">Order Now</a>
  <router-link :to="/update/ +items.id">  <span class="Edit-btn">    Edit</span></router-link>
      </p>
    </div>
    
    </div>

    </div>
</template>

<script>
import HeaderMenu from "./Header.vue"
import axios from "axios"
export default {
  name:"HomePage",
  components:{
      HeaderMenu
  },
  data()
  {
      return{
    resturant:[],
      }
  },
 async mounted() {
      let user=localStorage.getItem("user-info")
      if (!user){
          this.$router.push({name:"SignUpPage"})
      }

      let result = await axios.get("http://localhost:3000/resturant")
      this.resturant=result.data

  },
}
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 500px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}

.card-1 {
 background: radial-gradient(#60efbc, #58d5c9);
}
.Edit-btn{
  font-weight: 600;
  color: #ffffff;
  margin-left: 50px;
  text-decoration: none;
}

.Edit-btn:hover{
  font-weight: 600;
  color: rgb(245, 81, 81);
  cursor:pointer
 }
 a{
   text-decoration: none;
 }

 #workingAnimation span {
   display:inline-block;
	background-color: #ccc;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin-right: 7px;
  animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: infinite;
	animation-fill-mode: both;
}
#workingAnimation span {
	animation-delay: 0.7s;
}
@keyframes blink {
	0% {
		background-color: rgba(195,205,213,0.2);
	}
	20% {
		background-color: rgb(5, 117, 48);
		transform: scale(1.2);
	}
	100% {
		background-color: rgba(195,205,213,0.2);
	}
}
 
</style>

