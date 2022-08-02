<script lang="ts">
  import "./Header.scss";


</script>

<div class="basket">
  <div on:click={increment}>
    <div style="cursor: pointer;">
      <span class="basket-text">Basket</span>
    </div>
    <div style="cursor: pointer;">
      <span class="basket-text">{basketItems}</span>
    </div>
  </div>
</div>
