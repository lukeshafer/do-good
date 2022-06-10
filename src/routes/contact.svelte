<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<main>
  <Box background="var(--accent-color)">
    <div class="content">
      <ContactForm />
    </div>
  </Box>
</main>

<style>
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(5, 3em) auto;
  }

  .content {
    padding: 1em 1em;
    position: relative;
    transition: transform 200ms;
  }

  main {
    max-width: 40em;
  }

  div {
    padding: 1em;
  }
</style>
