<script>
  import { page } from "$app/stores";
  import "../app.css";
</script>

<header class="flex justify-between px-2">
  <div>menu</div>
  <div>octopus plotting</div>
  <div>something else</div>
</header>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
