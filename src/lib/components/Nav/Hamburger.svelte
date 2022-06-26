<script lang="ts">
  import Box from '../Box.svelte';
  import { isNavActive } from '$lib/stores';

  let hidden: boolean;
  let backgroundImage = ``;
</script>

<div class="wrapper">
  <Box background="transparent">
    <button
      class="hamburger"
      class:active={$isNavActive}
      on:click={() => ($isNavActive = !$isNavActive)}
      hidden>
      <span />
      <span />
      <div class="visibly-hidden">Navigation Menu</div>
      <span />
    </button>
  </Box>
</div>

<style lang="postcss">
  button.hamburger {
    display: flex;
    font-size: 1.3em;
    flex-direction: column;
    justify-content: center;
    border-style: none;
    --line-spacing: 0.3em;
    gap: var(--line-spacing);
    padding: var(--line-spacing);
    background-color: transparent;
  }

  button.hamburger:hover {
    cursor: pointer;

    & span {
      filter: brightness(1.5);
    }
  }

  /* Styling the hamburger lines */
  button.hamburger span {
    border-radius: 1em;
    display: block;
    width: 2.5em;
    text-align: center;
    --line-height: 0.4em;
    --translate-amount: calc(var(--line-spacing) + var(--line-height));
    height: var(--line-height);
    position: relative;
    background-color: var(--primary-color);
    transform-origin: center;
    transition: transform 250ms, filter 100ms;
  }

  /* Below selectors are for animating the X */
  button.hamburger.active span:first-child {
    transform: translateY(var(--translate-amount)) rotate(0.125turn);
  }
  button.hamburger.active span:last-child {
    transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
  }
  button.hamburger.active span {
    transform: scale(0, 1);
  }
</style>
