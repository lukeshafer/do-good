<script lang="ts">
  export let background: string;
</script>

<article style:background-color={background}>
  <slot />
</article>

<style>
  article {
    position: relative;
    padding: 0.2em;
    text-align: center;
    border-radius: 1.5em;
    border: 2px solid var(--border-color);
    outline: 0.1px solid rgba(var(--background-values), 0.5);
  }

  /* Box Shadow -- used ::after instead of box-shadow because of the shadow's border */
  article::after {
    position: absolute;
    padding: inherit;
    text-align: center;
    border-radius: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    transform: translate(0.5rem, 0.4rem);
    background: var(--box-shadow-color);
    border: 2px solid var(--border-color);
    z-index: -1;
  }
</style>
