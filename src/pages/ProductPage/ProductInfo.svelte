<script lang="ts">
    import Button from '@/components/Button/Button.svelte';
    import { getCookie, setCookie, eraseCookie } from '@/shared/cookies';

    import InformationBox from '@/components/InformationBox/InformationBox.svelte';
    import OptionSelector from '@/components/OptionSelector/OptionSelector.svelte';
    import SectionBreak from '@/components/SectionBreak/SectionBreak.svelte';
    import DeliveryEstimate from './DeliveryEstimate.svelte';
    import { cartStore } from '@/shared/stores';

    const handleAddToCart = () => {
        //if the item is already in the cart, increase the quantity
        const cart = getCookie('cart');
        const cartItems = cart ? JSON.parse(cart) : [];
        const item = cartItems.find((item) => item.id === 1);
        if (item) {
            item.quantity++;
        } else {
            cartItems.push({
                id: 1,
                quantity: 1,
                name: 'watch',
                price: 100,
            });
        }
        setCookie('cart', JSON.stringify(cartItems), 1);
        //update the cart store by finding the item in the cart and increasing the quantity
        cartStore.update((cart) => {
            const item = cart.find((item) => item.id === 1);
            if (item) {
                item.quantity++;
            } else {
                cart.push({
                    id: 1,
                    quantity: 1,
                    name: 'watch',
                    price: 100,
                });
            }
            return cart;
        });
    };
</script>

<div class="page-container">
    <InformationBox
        title={'Soulland X Skagen Grenen Chronograph Green Leather Watch'}
        price={500}
    />
    <OptionSelector />
    <SectionBreak />
    <Button
        label={'Add to basket'}
        styles={{
            color: 'black',
            width: '100%',
            height: '40px',
        }}
        onClick={handleAddToCart}
    />
    <SectionBreak />
    <DeliveryEstimate expected={'next day'} freePrice={75} />
</div>

<style>
    .page-container {
        padding: 2em;
    }
</style>
