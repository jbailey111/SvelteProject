<script lang="ts">
    import ProductImages from './ProductImages.svelte';
    import ProductInfo from './ProductInfo.svelte';
</script>

<div class="wrapper">
    <ProductImages />
    <ProductInfo />
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        padding: 50px 200px;
        justify-content: center;
    }
</style>
