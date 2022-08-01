<script lang="ts">
  import "./Header.scss";
  import Basket from "./Basket.svelte";
</script>

<nav>
  <div class="navbar">
    <div class="nav-item" />
    <div class="nav-item">
      <span class="title">Svelte Shop</span>
    </div>
    <div class="nav-item icons">
      <div />
      <div class="menu-item">Login</div>
      <Basket />
    </div>
  </div>
  <div class="menu">
    <div class="menu-item">Home</div>
    <div class="menu-item">About</div>
    <div class="menu-item">Contact</div>
  </div>
</nav>

<style>
</style>
