<script>
    import Button from '@/components/Button/Button.svelte';
    import hero from '@/assets/hero.mp4';
</script>

<div class="Hero-wrapper">
    <video class="background" autoplay loop muted>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <h1>Svelte shop</h1>
    <p class="subheading">A place to buy all of your random crap</p>
    <Button
        label={'Shop now'}
        styles={{
            color: 'black',
            width: '100px',
            height: '50px',
        }}
        onClick={() => {}}
    />
</div>

<style lang="scss">
    .background {
        position: absolute;
        top: 108;
        left: 0;
        width: 100%;
        height: 70vh;
        opacity: 0.5;
        z-index: -1;
        object-fit: cover;
    }
    .Hero-wrapper {
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 50px 200px;
        justify-content: center;
        align-items: center;
    }
    .subheading {
        margin: 10px 0;
    }
</style>
