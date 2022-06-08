<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<main>
  <ContactForm />
</main>

<style>
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(5, 3em) auto;
  }

  main {
    max-width: 40em;
  }

  div {
    padding: 1em;
  }
</style>
