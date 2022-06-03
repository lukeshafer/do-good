<script lang="ts">
</script>

<header>
  <slot />
</header>

<style>
  header {
    --left-gap: 4em;
    width: calc(100vw - var(--left-gap));
    padding-left: var(--left-gap);
    padding-top: 2em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
</style>
