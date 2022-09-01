<script lang="ts">
    import Header from './components/Header/Header.svelte';
    import Counter from './components/Counter.svelte';
    import { Router, Link, Route } from 'svelte-routing';
    import ProductPage from './pages/ProductPage/ProductPage.svelte';
    import { setCookie } from './shared/cookies';

    export let url: string = '';
    //create a cart cookie
    setCookie('cart', JSON.stringify([]), 1);
</script>

<Router {url}>
    <div>
        <Header />
        <Route path="/" component={ProductPage} />
        <Route path="/counter" component={Counter} />
    </div>
</Router>

<style>
</style>
