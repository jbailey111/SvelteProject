<script lang="ts">
    export let logo: string;
    export let text: string = 'Hello World!';
</script>

<div class="benifit-wrapper">
    {#if logo}
        <img class="benifit-icon" src={logo} alt="svelte logo" />
    {/if}
    <span class="benifit-text">{text}</span>
</div>

<style lang="scss">
    .benifit-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20rem;
        height: 20rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out;
        &:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        }
    }

    .benifit-icon {
        width: 6rem;
        height: 6rem;
        margin: 1.5rem;
    }

    .benifit-text {
        padding: 0 1rem;
        text-align: center;
    }
</style>
