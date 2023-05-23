<script>
    import BenifitBox from '@/components/BenifitBox/BenifitBox.svelte';
</script>

<div class="wrapper">
    <span class="benifit-title">What we do</span>
    <div class="benifit-items">
        <BenifitBox />
        <BenifitBox />
        <BenifitBox />
    </div>
</div>

<style class="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 20px 400px;
        height: 500px;
    }

    .benifit-title {
        font-size: 2rem;
        font-weight: 600;
        margin: 2rem;
    }

    .benifit-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
</style>
