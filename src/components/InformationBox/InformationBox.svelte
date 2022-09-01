<script lang="ts">
    import './InformationBox.scss';

    export let title: string;
    export let price: number;
    export let reduction: number = 0;

    const calculateReducedPrice = (
        price: number,
        reduction: number
    ): string => {
        const reducedPrice = price - (price * reduction) / 100;
        return reducedPrice.toFixed(2);
    };

    const reducedPrice = calculateReducedPrice(price, reduction);
</script>

<div class="product-info-box">
    <div class="product-info-title">
        <span class="product-title-text">{title}</span>
    </div>
    <div class="info-container">
        <div class="product-reviews">
            <div>4/5</div>
            <div>10 Reviews</div>
            <div>Write a review</div>
        </div>
        <div class="product-info-price">
            <div class="normal-price" class:strike={reduction}>
                {`$${price.toFixed(2)}`}
            </div>
            {#if reduction}
                <div class="reduced-price">
                    {`$${reducedPrice}`}
                </div>
            {/if}
        </div>
        {#if reduction}
            <div class="product-info-reduction">
                <span>{`${reduction}% off for first time customer`}</span>
            </div>
        {/if}
    </div>
</div>

<style></style>
