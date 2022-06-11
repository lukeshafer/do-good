<script lang="ts">
  import FAQList from '$lib/components/FAQList.svelte';
</script>

<main>
  <h1>Frequently Asked Questions</h1>

  <FAQList />
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
    transition: 200ms;
  }

  main {
    max-width: 40em;
    flex-wrap: wrap;
  }

  div {
    padding: 1em;
  }
</style>
