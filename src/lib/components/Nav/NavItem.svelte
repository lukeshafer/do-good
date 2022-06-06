<script lang="ts">
  import { isNavActive } from '$lib/stores';

  export let href: string;
  let index: number;
</script>

<li>
  <a {href} on:click={() => ($isNavActive = false)}><slot /></a>
</li>

<style>
  li {
    height: 3em;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    width: 100%;
  }

  a {
    display: block;
    width: 100%;
    padding: 1em;
    font-size: 1.2em;
    font-weight: 300;
    text-decoration: none;
    color: var(--secondary-color);
    text-shadow: 0.05em 0.05em rgba(var(--secondary-values), 0.4);
  }

  li:hover {
    filter: brightness(1.1);
  }
</style>
