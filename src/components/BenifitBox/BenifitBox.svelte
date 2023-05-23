<script lang="ts">
    import logo from '@/assets/2squares.svg';
    export let text = 'Hello World!';
</script>

<div class="benifit-wrapper">
    <img class="benifit-icon" src={logo} alt="svelte logo" />
    {text}
</div>

<style lang="scss">
    .benifit-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20rem;
        height: 20rem;
        border: 1px solid black;
    }

    .benifit-icon {
        width: 5rem;
        height: 5rem;
        margin: 1rem;
    }
</style>
