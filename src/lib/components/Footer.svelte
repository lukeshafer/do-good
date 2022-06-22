<script lang="ts">
</script>

<footer>
  <slot />
</footer>

<style>
  footer {
    background-color: var(--primary-color);
    --h-padding: 4em;
    width: calc(100vw - var(--h-padding));
    padding-left: var(--h-padding);
    padding-right: var(--h-padding);
    padding-bottom: var(--h-padding);
  }
</style>
