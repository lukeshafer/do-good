<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  export let title: string, story: string, href: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <Box background="var(--primary-color)">
    <div class="content">
      {@html story}
      <div class="link-wrapper">
        <Box background="var(--accent-color)" {href} target="_blank">
          <p class="link" style="width:auto">Donate Now!</p>
        </Box>
      </div>
    </div>
  </Box>
</main>

<style>
  main {
    max-width: 40em;
    padding: 0 2em;
    color: var(--secondary-color);
  }

  .content {
    padding: 1em 2em;
  }

  .link-wrapper {
    width: 10em;
    font-size: 1.3em;
    margin: 1em auto;
  }
</style>
