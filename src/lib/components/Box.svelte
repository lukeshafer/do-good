<script lang="ts">
  export let background: string;
  export let href = '';

  let open = true;
</script>

<article style:background class:has-link={href}>
  {#if href}
    <a {href}>
      <slot />
    </a>
  {:else}
    <slot><!-- optional fallback --></slot>
  {/if}
</article>

<style>
  article {
    /* Adding comment to force a merge */
    position: relative;
    transition: transform 200ms;
    padding: 0.2em;
    text-align: center;
    border-radius: 1.5em;
    border: 2px solid var(--border-color);
    outline: 0.1px solid rgba(var(--background-values), 0.5);
    box-shadow: 0.5em 0.4em var(--box-shadow-color);
  }

  article.has-link:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
</style>
