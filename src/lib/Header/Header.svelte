<script lang="ts">
  import "./Header.scss";
  import logo from "../../assets/logo.svg";
  import Basket from "./Basket.svelte";

  let basketItems: number = 0;
  let hover: boolean = false;
  const increment = () => {
    basketItems += 1;
  };

  const handleHover = () => {
    hover = !hover;
    console.log(hover);
  };
</script>

<nav>
  <div class="navbar">
    <div class="nav-item">
      <img src={logo} alt={"svelte logo"} class="logo" />
    </div>
    <div class="nav-item">
      <span class="title">Svelte Shop</span>
      <div class="menu">
        <div
          class="menu-item"
          on:mouseenter={handleHover}
          on:mouseleave={handleHover}
        >
          Home
        </div>
        <div class="menu-item">About</div>
        <div class="menu-item">Contact</div>
      </div>
    </div>
    <div class="nav-item icons">
      <div />
      <div class="menu-item user-controls">Login</div>
      <div class="menu-item user-controls" on:click={increment}>
        Basket({basketItems})
      </div>
    </div>
  </div>
</nav>

<style>
</style>
