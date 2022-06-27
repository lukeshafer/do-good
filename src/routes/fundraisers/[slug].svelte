<script lang="ts">
  import Button from '$lib/components/DesignBlocks/Button.svelte';
  export let title: string, story: string, href: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div class="content">
    {@html story}
    <div class="link-wrapper">
      <Button {href} target="_blank">
        <p class="link" style="width:auto">Donate Now!</p>
      </Button>
    </div>
  </div>
</main>

<style lang="postcss">
  main {
    position: relative;
    flex-direction: column;
    text-align: left;
  }

  .content > :global(h2) {
    font-size: 2em;
    text-shadow: 0 0 0.9em #000;
    padding: 0 1em;

    &:nth-of-type(even) {
      text-align: right;
    }
  }

  .content > :global(p) {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 10em;
    width: clamp(10rem, 50vw, 30rem);

    font-size: 1.5em;
    font-style: italic;
    background-image: url('https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_469/v1656003087/pridefull/textbox_wss4yo.png');
    color: black;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 1em;

    &:nth-of-type(even) {
      margin-left: auto;
      padding-right: 1em;
    }

    &:nth-of-type(odd) {
      margin-right: auto;
      padding-left: 1em;
    }
  }

  .content :global(img) {
    width: min(6em, 100%);
    height: auto;
    margin-top: 0.5em;
  }

  .content > :global(figure) {
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

  .link-wrapper {
    display: flex;
    justify-content: center;
  }

  .link {
    font-weight: bold;
    font-style: italic;
    margin: 0.5em;
  }
</style>
