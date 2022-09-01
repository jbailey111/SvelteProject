<script lang="ts">
    import './OptionSelector.scss';
</script>

<div class="option-wrapper">
    <div class="options-title-container">
        <span class="option-title">Colours</span>
    </div>
    <div class="options">
        <div style="--color: {'red'}" class="colour-option" />
        <div
            style="--color: {'green'}"
            class="colour-option"
            data-value="green"
        />
        <div
            style="--color: {'blue'}"
            class="colour-option"
            data-value="blue"
        />
    </div>
</div>

<style lang="scss">
    .colour-option {
        width: 50px;
        background-color: var(--color);
        height: 50px;
        border-radius: 10%;
    }
</style>
