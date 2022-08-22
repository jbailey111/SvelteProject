<script lang="ts">
    import './Menu.scss';
    export let data: MenuData;

    interface MenuData {
        title: string;
        links: MenuItem[];
    }

    interface MenuItem {
        title: string;
        path: string;
    }
</script>

<ul class="menu-list">
    <li class="list-title">{data.title}</li>
    {#each data.links as link}
        <li class="list-item">
            <a class="list-link" href={link.path}>{link.title}</a>
        </li>
    {/each}
</ul>
