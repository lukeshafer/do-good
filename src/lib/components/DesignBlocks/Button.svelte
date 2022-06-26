<script lang="ts">
  export let type: 'link' | 'button' = 'link';
  export let href = '';
  export let target = '';
  export let action: () => unknown = () => {};
</script>

{#if type === 'button'}
  <button class="btn" on:click={action}>
    <slot />
  </button>
{:else}
  <a class="btn" {href} {target}>
    <slot />
  </a>
{/if}

<style lang="postcss">
  .btn {
    display: block;
    width: fit-content;
    color: white;
    position: relative;
    transition: transform 200ms;
    padding: 0.4em 1em;
    text-align: center;
    border-radius: 1.5em;
    border: 2px solid var(--secondary-color);
    box-shadow: 0.3em 0.2em var(--secondary-color);
    background: var(--secondary-accent-color);
    text-decoration: none;
    font: 600 1.5em 'Droid Serif';
    font-style: italic;
  }

  .btn:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
    cursor: pointer;
  }
</style>
