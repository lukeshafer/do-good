<script lang="ts">
  import { isNavActive } from '$lib/stores';

  export let name: string;
</script>

<li>
  <button on:click={void 0}>{name ? name : 'More...'} &#9660</button>
  <ul>
    <slot><!-- optional fallback --></slot>
  </ul>
</li>

<style lang="postcss">
  li {
    height: 3em;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    position: relative;
  }

  button {
    background-color: var(--primary-color);
    height: 100%;
    padding: 0 1em;
    border: none;
    display: block;
    font-size: 1.2em;
    font-weight: 300;
    text-decoration: none;
    color: var(--secondary-color);
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
      height: 0;
      transition: height 200ms;
      & > :global(a) {
        opacity: 0;
        transition: opacity 100ms;
      }
    }
  }

  li:hover {
    & button {
      filter: brightness(1.1);
      cursor: pointer;
      animation: dropdown 1s;
    }
    & ul > :global(li) {
      height: 3em;

      & > :global(a) {
        opacity: 1;
      }
    }
  }

  li:hover > ul {
    display: block;
  }
</style>
