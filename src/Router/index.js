import { createRouter, createWebHistory} from "vue-router";

import Home from "../Views/Pages/Home.vue"
import BusAndTrain from "../Views/Pages/Bus&Train.vue"
import Car from "../Views/Pages/Car.vue"
import House from "../Views/Pages/House.vue"


const routes =[
    {path: "/", component: Home},
    {path: "/BusAndTrain", component: BusAndTrain},
    {path: "/Car", component: Car},
    {path: "/House", component: House},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;