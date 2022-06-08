<script lang="ts">
  import { isNavActive } from '$lib/stores';

  import Hamburger from './Hamburger.svelte';
  let active: boolean;

  isNavActive.subscribe((value) => {
    active = value;
  });
</script>

<svelte:body />

<div class="hamburger">
  <Hamburger />
</div>
<div
  aria-hidden="true"
  id="background"
  class:active
  style="--display: {active ? 'block' : 'none'};"
  on:click={() => ($isNavActive = false)} />
<nav class:active>
  <ul>
    <!-- A bunch of NavItems will typically go in this slot -->
    <slot />
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    background: var(--primary-color);
    margin-left: -10em;
    padding-left: 10em;
    height: fit-content;
  }

  ul {
    margin: 0 5em 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 2em;

    /* removes the default styling of lists */
    list-style-type: none;
    padding-inline-start: 0;
    padding: 0;
  }

  .hamburger {
    position: absolute;
    left: 0;
    margin: 3em;
    z-index: 2;
  }

  @media screen and (max-width: 700px) {
    #background {
      display: none;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: black;
    }

    @keyframes fade-background {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.5;
      }
    }

    #background.active {
      animation: fade-background 500ms forwards;
      display: block;
    }
    nav {
      margin-left: 0;
      padding-left: 0;
      transition: transform 500ms;
      transform: translateX(0);
      display: flex;
      position: fixed;
      left: 0;
      top: 0;
      width: 50vw;
      height: 100vh;
      z-index: 1;
      font-size: 2em;
      align-items: flex-start;
      box-shadow: 0 0 4em black;
    }

    ul {
      margin: 8em 0 0 0;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: center;
      gap: 1em;
      --delay: 100ms;
    }
    nav:not(.active) {
      transform: translateX(-150%);
    }

    nav:not(.active) ul :global(li) {
      opacity: 0;
      transform: translateX(-4em);
    }

    nav.active ul :global(li) {
      transition: opacity 500ms, transform 300ms;
    }

    nav ul :global(li:nth-child(1)) {
      transition-delay: calc(1 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(2)) {
      transition-delay: calc(2 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(3)) {
      transition-delay: calc(3 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(4)) {
      transition-delay: calc(4 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(5)) {
      transition-delay: calc(5 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(6)) {
      transition-delay: calc(6 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(7)) {
      transition-delay: calc(7 * var(--delay) + 100ms);
    }
    nav ul :global(li:nth-child(8)) {
      transition-delay: calc(8 * var(--delay) + 100ms);
    }
  }
</style>
