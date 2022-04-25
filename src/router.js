import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/Home.vue"
import SignUpPage from "./components/SignupPage.vue"
import LoginPage from "./components/Login.vue"
import AddPage from "./components/Add.vue"
import UpdatePage from "./components/Update.vue"
const routes = [
	{
		path: '/',
		name: "HomePage",
		component: HomePage
	},
    {
		path: '/signup',
		name: "SignUpPage",
		component: SignUpPage
	},
    {
		path: '/login',
		name: "Login",
		component: LoginPage
	},
    {
		path: '/add',
		name: "Add",
		component: AddPage
	},
    {
		path: '/update/:id',
		name: "Update",
		component: UpdatePage
	},
	
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
