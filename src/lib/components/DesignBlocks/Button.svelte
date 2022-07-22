<script lang="ts">
  import { onMount } from 'svelte';

  export let type: 'link' | 'button' | 'submit' | 'style-only' = 'link';
  export let href = '';
  export let target = '';
  export let active = true;
  export let action: () => unknown = () => {};

  onMount(() => {
    if (!active) {
      href = 'javascript:void(0)';
      action = () => {};
    }
  });
</script>

{#if type === 'button'}
  <button class="btn" on:click={action} class:disabled={!active}>
    <slot />
  </button>
{:else if type === 'link'}
  <a class="btn" {href} {target} class:disabled={!active}>
    <slot />
  </a>
{:else if type === 'submit'}
  <button class="btn" type="submit" disabled={!active} class:disabled={!active}>
    <slot />
  </button>
{:else if type === 'style-only'}
  <div class="btn">
    <slot />
  </div>
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

  a.btn:not(.disabled):hover {
    transform: scale(1.1);
    filter: brightness(1.1);
    cursor: pointer;
  }

  a.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
