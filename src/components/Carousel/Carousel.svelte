<script lang="ts">
    export let options = [1, 2, 3, 4, 5, 6];

    const moveRight = () => {
        const removedItem = options.pop();
        options.unshift(removedItem);
        options = [...options];
    };

    const moveLeft = () => {
        const removedItem = options.shift();
        options.push(removedItem);
        options = [...options];
    };
</script>

<div class="carousel-wrapper">
    <div class="control" on:click={moveLeft}>&lt;</div>
    <div class="options">
        {#each options as option}
            <div class="box">{option}</div>
        {/each}
    </div>
    <div class="control" on:click={moveRight}>&gt;</div>
</div>

<style>
    .carousel-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .options {
        display: flex;
        flex-direction: row;
    }

    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #ccc;
        margin: 0 10px;
        align-self: center;
        cursor: pointer;
    }

    .box {
        width: 200px;
        height: 200px;
        background-color: #ccc;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
