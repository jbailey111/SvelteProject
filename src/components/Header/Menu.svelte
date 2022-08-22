<script lang="ts">
    import DropDownList from './DropDownList.svelte';
    import { data } from './Menudata';
    import './Menu.scss';
    export let active: boolean;
</script>

<div class="hidden-menu" class:active>
    <div class="menu-row leftEnd">
        <DropDownList data={data[0]} />
    </div>
    <div class="menu-row center"><DropDownList data={data[1]} /></div>
    <div class="menu-row rightEnd"><DropDownList data={data[1]} /></div>
</div>
