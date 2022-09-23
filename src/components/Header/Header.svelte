<script lang="ts">
    import './Header.scss';
    import logo from '../../assets/logo.svg';
    import Menu from './Menu.svelte';
    import { getJsonCookie } from '@/shared/cookies';
    import type { CartType } from '@/shared/cookies';

    export let basketItems: number = 0;
    let hoverHome: boolean = false;
    let hoverAbout: boolean = false;
    let hoverContact: boolean = false;

    //Get cookie

    const handleHover = (hover) => {
        return !hover;
    };
</script>

<nav>
    <div class="navbar">
        <div class="nav-item">
            <img src={logo} alt={'svelte logo'} class="logo" />
        </div>
        <div class="nav-item">
            <span class="title">Svelte Shop</span>
            <div class="menu">
                <div
                    class="menu-item"
                    on:mouseenter={() => {
                        hoverHome = handleHover(hoverHome);
                    }}
                    on:mouseleave={() => {
                        hoverHome = handleHover(hoverHome);
                    }}
                >
                    <Menu active={hoverHome} />
                    Home
                </div>
                <div
                    class="menu-item"
                    on:mouseenter={() => {
                        hoverAbout = handleHover(hoverAbout);
                    }}
                    on:mouseleave={() => {
                        hoverAbout = handleHover(hoverAbout);
                    }}
                >
                    <Menu active={hoverAbout} />
                    About
                </div>
                <div
                    class="menu-item"
                    on:mouseenter={() => {
                        hoverContact = handleHover(hoverContact);
                    }}
                    on:mouseleave={() => {
                        hoverContact = handleHover(hoverContact);
                    }}
                >
                    <Menu active={hoverContact} />
                    Contact
                </div>
            </div>
        </div>
        <div class="nav-item icons">
            <div />
            <div class="menu-item user-controls">Login</div>
            <div class="menu-item user-controls">
                Basket({basketItems})
            </div>
        </div>
    </div>
</nav>

<style>
</style>
