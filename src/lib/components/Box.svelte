<script lang="ts">
  export let background: string;

  let flipped = true;
</script>

<article on:click={() => (flipped = !flipped)} class:flipped style:background>
  <slot />

  <dialog>
    <slot name="modal" />
  </dialog>
</article>

<style>
  article {
    /* Adding comment to force a merge */
    position: relative;
    transition: transform 200ms;
    padding: 0.2em;
    text-align: center;
    border-radius: 1.5em;
    border: 2px solid var(--border-color);
    outline: 0.1px solid rgba(var(--background-values), 0.5);
    backface-visibility: hidden;
    box-shadow: 0.5em 0.4em var(--box-shadow-color);
  }

  article:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>
