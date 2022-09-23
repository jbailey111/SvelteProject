<script lang="ts">
    import Header from './components/Header/Header.svelte';
    import Counter from './components/Counter.svelte';
    import { Router, Route } from 'svelte-routing';
    import { cartStore } from '@/shared/stores';
    import { default as routes } from './pages/routes';

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
        {#each routes as route}
            <Route path={route.path} component={route.component} />
        {/each}
        <Route path="/counter" component={Counter} />
    </div>
</Router>

<style>
</style>
