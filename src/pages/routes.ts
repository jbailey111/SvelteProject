import Home__SvelteComponent_ from "./Home/Home.svelte";
import ProductPage__SvelteComponent_ from "./ProductPage/ProductPage.svelte";
import Basket__SvelteComponent_ from "./Basket/Basket.svelte";

export interface Route {
    name: string;
    path: string;
    component: any; 
}

let routes: Route[] = [
    {
        name: 'Home',
        path: '/',
        component: Home__SvelteComponent_,

    },
    {
        name: 'ProductPage',
        path: '/product/',
        component: ProductPage__SvelteComponent_,
    },
    {
        name: 'Basket',
        path: '/basket/',
        component: Basket__SvelteComponent_,
    },
];

export default routes;