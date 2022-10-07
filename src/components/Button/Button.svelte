<script lang="ts">
    type ButtonStyles = {
        color: string;
        width: string;
        height: string;
        radius?: boolean;
    };
    export let label: string;
    export let styles: ButtonStyles = {
        color: 'black',
        width: '100px',
        height: '50px',
    };
    export let onClick: () => void = () => {};
</script>

<div
    class="btn-wrapper"
    class:radius={styles.radius}
    style="--color:{styles.color}; --width:{styles.width}; --height:{styles.height};"
    on:click={onClick}
>
    <span>{label}</span>
</div>

<style>
    .btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--width);
        height: var(--height);
        background-color: var(--color);
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        padding: 0.5rem;
        user-select: none;
    }

    .radius {
        border-radius: 10px;
    }
</style>
