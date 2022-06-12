<script lang="ts">
  import FAQList from '$lib/components/FAQList.svelte';
</script>

<main>
  <h1>Frequently Asked Questions</h1>
  <p aria-labelledby="Click any question to see the answer!">
    (Click any question to see the answer!)
  </p>

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
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
  }

  h1 {
    margin: 0 auto;
    padding: 0.25em;
    font-weight: bold;
  }

  div {
    padding: 1em;
  }

  p {
    font-style: italic;
  }
</style>
