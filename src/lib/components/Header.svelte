<script lang="ts">
</script>

<header>
  <slot />
</header>

<style>
  header {
    --h-padding: 4em;
    width: calc(100vw - var(--h-padding));
    padding-left: var(--h-padding);
    padding-right: var(--h-padding);
    padding-top: 2em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
