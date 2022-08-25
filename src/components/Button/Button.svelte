<script lang="ts">
    type ButtonStyles = {
        color: string;
        width: string;
        height: string;
    };

    export let label: string;
    export let styles: ButtonStyles;
    export let onClick: () => void;
</script>

<div class="btn-wrapper" style="--color:{styles.color};">
    <span>Text</span>
</div>

<style>
    .btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 85px;
        height: 35px;
        border-radius: 10px;
        background-color: var(--color);
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
</style>
