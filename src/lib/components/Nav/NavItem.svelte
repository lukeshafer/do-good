<script lang="ts">
  import { isNavActive, dropdowns } from '$lib/stores';
  import { getContext } from 'svelte';

  const parentIndex: number = getContext('index');

  const handleFocus = () => {
    if (!inDropdown) {
      $dropdowns.map((value, index) => ($dropdowns[index] = false));
      $isNavActive = true;
    } else {
      $dropdowns[parentIndex] = true;
    }
  };

  export let inDropdown = false;
  export let href: string;
</script>

<li>
  <a
    sveltekit:prefetch
    {href}
    on:click={() => ($isNavActive = false)}
    on:focus={handleFocus}>
    <slot /></a>
</li>

<style>
  li {
    height: 3em;
    display: flex;
    align-items: center;
    background-color: transparent;
    width: 100%;
  }

  a {
    display: block;
    padding: 0 1em;
    font-size: 2em;
    font-weight: 300;
    font-family: var(--subtitle-font);
    text-decoration: none;
    color: var(--heading-text-color);
    text-shadow: 0.05em 0.05em rgba(var(--secondary-values), 0.4);
    white-space: nowrap;
  }

  li:hover {
    background-color: var(--secondary-color);
    filter: brightness(1.2);
  }
</style>
