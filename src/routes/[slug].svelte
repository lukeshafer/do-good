<!-- This is a template for generic pages used by the Page collection type -->
<script lang="ts">
  export let title: string, content: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div class="content">
    {@html content}
  </div>
</main>

<style lang="postcss">
  main {
    position: relative;
    flex-direction: column;
    text-align: left;
  }

  .content {
    & > :global(figure) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1rem;

      & :global(img) {
        width: min(30em, 100%);
        height: auto;
      }
    }

    & :global(img) {
      width: min(6em, 100%);
      height: auto;
      margin-top: 0.5em;
    }

    & :global(h1) {
      margin: 0 auto;
      padding: 0 1em;
      font-weight: bold;
      text-align: center;
    }

    & :global(p) {
      position: relative;
      display: flex;
      min-width: 10em;
      width: clamp(10em, 70vw, 30em);
      margin: 1em auto;

      font-size: 1.5em;
      color: black;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 1em;

      &:nth-of-type(3n-2) {
        background-color: var(--box1-color);
        border: 5px solid var(--box1-accent-color);
      }

      &:nth-of-type(3n-1) {
        background-color: var(--box2-color);
        border: 5px solid var(--box2-accent-color);
      }

      &:nth-of-type(3n) {
        background-color: var(--box3-color);
        border: 5px solid var(--box3-accent-color);
      }
    }
  }
</style>
