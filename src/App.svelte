<script lang="ts">
    import Header from './components/Header/Header.svelte';
    import Counter from './components/Counter.svelte';
    import { Router, Link, Route } from 'svelte-routing';
    import ProductPage from './pages/ProductPage/ProductPage.svelte';
    import { cartStore } from '@/shared/stores';
    import Home from './pages/Home/Home.svelte';

    export let url: string = '';
    let cart;

    cartStore.subscribe((value) => {
        cart = value;
    });

    const getTotalCartQuantity = (cart) => {
        let totalItems: number = 0;
        for (const item of cart) {
            totalItems += item.quantity;
        }
        return totalItems;
    };

    $: basketItems = getTotalCartQuantity(cart);
</script>

<Router {url}>
    <div>
        <Header {basketItems} />
        <Route path="/" component={Home} />
        <Route path="/" component={ProductPage} />
        <Route path="/counter" component={Counter} />
    </div>
</Router>

<style>
</style>
