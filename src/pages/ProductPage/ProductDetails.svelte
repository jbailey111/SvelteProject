<script lang="ts">
</script>

<div class="product-image-grid">
    <img class="product-image" src="https://picsum.photos/200/300" />
    <img class="product-image" src="https://picsum.photos/200/300" />
    <img class="product-image" src="https://picsum.photos/200/300" />
    <img class="product-image" src="https://picsum.photos/200/300" />
</div>

<style>
    .product-image-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1em;
    }
    .product-image {
        width: 25rem;
        height: 25rem;
        margin: 0 auto;
    }
</style>
