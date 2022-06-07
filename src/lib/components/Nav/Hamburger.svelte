<script lang="ts">
  import Box from '../Box.svelte';
  import { isNavActive } from '$lib/stores';

  let hidden: boolean;
  let backgroundImage = ``;
</script>

<div hidden class="wrapper" aria-hidden="true">
  <Box background="white">
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

<style>
  button.hamburger {
    display: flex;
    font-size: 1.3em;
    flex-direction: column;
    justify-content: center;
    border-style: none;
    --line-spacing: 0.5em;
    gap: var(--line-spacing);
    padding: var(--line-spacing);
    background-color: transparent;
    /* margin-left: auto; */
  }
  button.hamburger:hover {
    cursor: pointer;
  }
  button.hamburger:hover span {
    filter: brightness(150%);
  }
  button.hamburger span {
    display: block;
    width: 2.5em;
    text-align: center;
    --line-height: 0.3em;
    --translate-amount: calc(var(--line-spacing) + var(--line-height));
    height: var(--line-height);
    position: relative;
    background-color: var(--secondary-color);
    transform-origin: center;
    transition: transform 250ms;
  }
  button.hamburger.active span:first-child {
    transform: translateY(var(--translate-amount)) rotate(0.125turn);
  }
  button.hamburger.active span:last-child {
    transform: translateY(calc(-1 * var(--translate-amount))) rotate(-0.125turn);
  }
  button.hamburger.active span {
    transform: scale(0, 1);
  }

  @media screen and (max-width: 700px) {
    .wrapper {
      display: block;
    }
  }
</style>
