<script lang="ts">
    import ProductDetails from './ProductDetails.svelte';
    import ProductInfo from './ProductInfo.svelte';
</script>

<div class="wrapper">
    <ProductDetails />
    <ProductInfo />
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 50px 200px;
    }
</style>
