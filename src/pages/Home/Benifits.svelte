<script>
    import BenifitBox from '@/components/BenifitBox/BenifitBox.svelte';
    import squareLogo from '@/assets/2squares.svg';
    import triangleLogo from '@/assets/triangleSign.svg';
    import starsLogo from '@/assets/5star.svg';
</script>

<div class="wrapper">
    <span class="benifit-title">What we do</span>
    <div class="benifit-items">
        <BenifitBox
            logo={squareLogo}
            text={`Stay connected with our innovative solutions and experience a new level of efficiency and peace of mind by using our web portal to instantly connect with agents for unparalleled support.`}
        />
        <BenifitBox
            logo={triangleLogo}
            text={'Track and optimize performance effortlessly with your personalized dashboard. Gain insights, monitor progress, and make informed decisions to achieve new levels of efficiency and success. '}
        />
        <BenifitBox
            logo={starsLogo}
            text={'We take pride in delivering a 5-star experience to our valued customers. With our unwavering commitment to excellence, we consistently go above and beyond to ensure your satisfaction. '}
        />
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
