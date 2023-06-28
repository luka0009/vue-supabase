import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../lib/supabaseClient";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Create from "../views/Create.vue";
import ViewWorkout from "../views/ViewWorkout.vue";
import store from "../store/store";
import { computed } from "vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
		meta: {
			title: "Home",
			auth: false,
		},
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			title: "Login",
			auth: false,
		},
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
		meta: {
			title: "Register",
			auth: false,
		},
	},
	{
		path: "/create",
		name: "Create",
		component: Create,
		meta: {
			title: "Create",
			auth: true,
		},
	},
	{
		path: "/view-workout/:workoutId",
		name: "View-Workout",
		component: ViewWorkout,
		meta: {
			title: "View Workout",
			auth: false,
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | Fitness App`;
	next();
});

router.beforeEach(async (to, from, next) => {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (to.matched.some((res) => res.meta.auth)) {
		if (user) {
			next();
			return;
		}
		next({ name: "Login" });
		return;
	}
	next();
});

export default router;
