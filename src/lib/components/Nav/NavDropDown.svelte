<script lang="ts">
  import { dropdowns } from '$lib/stores';
  import { setContext } from 'svelte';

  let open = false;
  let index: number;

  index = $dropdowns.push(open) - 1;
  setContext('index', index);

  $: $dropdowns[index] = open;

  dropdowns.subscribe((value) => {
    open = value[index];
  });

  export let name: string;
</script>

<li class:open>
  <button on:focus={() => (open = true)} on:click={void 0}
    >{name ? name : 'More...'} <span>&#9660</span></button>
  <ul>
    <slot><!-- optional fallback --></slot>
  </ul>
</li>

<style lang="postcss">
  li {
    height: 3em;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: relative;
    width: 100%;

    & span {
      transform: rotate(0deg);
      /* transition: transform 100ms; */
    }
  }

  button {
    background-color: transparent;
    height: 100%;
    padding: 0 1em;
    border: none;
    display: block;
    font-size: 2em;
    font-weight: 300;
    text-decoration: none;
    font-weight: 300;
    font-family: var(--subtitle-font);
    text-decoration: none;
    color: var(--heading-text-color);
    text-shadow: 0.05em 0.05em rgba(var(--secondary-values), 0.4);
  }

  ul {
    display: block;
    position: absolute;
    left: 0;
    top: 3em;
    bottom: 0;
    /* removes the default styling of lists */
    list-style-type: none;
    padding-inline-start: 0;
    padding: 0;
    width: max(13em, 100%);

    & > :global(li) {
      background-color: var(--secondary-color);
      height: 0em;
      transition: height 200ms;
      & > :global(a) {
        opacity: 0;
        transition: opacity 100ms;
      }
    }
  }

  li:hover > button,
  li.open > button {
    background-color: var(--secondary-color);
    filter: brightness(1.2);
    cursor: pointer;
    animation: dropdown 1s;

    & span {
      display: inline-block;
      transform: rotate(180deg);
    }

    & button {
    }
    & + ul > :global(li) {
      height: 3em;

      & > :global(a) {
        opacity: 1;
      }
    }
  }
</style>
