<script lang="ts">
  import { isNavActive } from '$lib/stores';

  export let href: string;
  let index: number;
</script>

<li>
  <a sveltekit:prefetch {href} on:click={() => ($isNavActive = false)}
    ><slot /></a>
</li>

<style>
  li {
    height: 3em;
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
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
  }

  li:hover {
    filter: brightness(1.1);
  }
</style>
