<script lang="ts">
  import { isNavActive } from '$lib/stores';

  import Hamburger from './Hamburger.svelte';
  let active: boolean;

  isNavActive.subscribe((value) => {
    active = value;
  });
</script>

<svelte:body />

<!-- this span is a tab stop which will close the nav bar -->
<span
  aria-hidden="true"
  tabindex="0"
  on:focus={() => ($isNavActive = false)}
  hidden={!active} />

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

<!-- this span is a tab stop which will close the nav bar -->
<span
  aria-hidden="true"
  tabindex="0"
  on:focus={() => ($isNavActive = false)}
  hidden={!active} />

<style>
  nav {
    background: linear-gradient(
      to right,
      var(--secondary-color) 0%,
      var(--secondary-color) 70%,
      rgba(var(--secondary-values), 0) 100%
    );
    padding-left: 0;
    transition: transform 500ms;
    transform: translateX(0);
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: min(70vw, 20em);
    height: 100vh;
    z-index: 1;
    font-size: min(1.2em, 2.5vh);
    align-items: flex-start;
    /* box-shadow: 0 0 4em black; */
  }

  ul {
    display: flex;

    /* removes the default styling of lists */
    list-style-type: none;
    padding-inline-start: 0;
    padding: 0;

    margin: 8em 0 0 0;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    gap: 1em;
    --delay: 100ms;
  }

  .hamburger {
    position: fixed;
    top: 0;
    left: 0;
    margin: 1em;
    z-index: 2;
  }

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
  nav ul :global(li:nth-child(9)) {
    transition-delay: calc(9 * var(--delay) + 100ms);
  }
  nav ul :global(li:nth-child(10)) {
    transition-delay: calc(10 * var(--delay) + 100ms);
  }
</style>
