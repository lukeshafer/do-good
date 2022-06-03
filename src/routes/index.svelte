<script lang="ts">
  import Box from '$lib/components/Box.svelte';
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<main>
  <Box background="var(--accent-color)">
    <h2>Rally for Mr. Talley</h2>
    <p class="box-amount">Goal: $5,000</p>
    <img
      class="box-icon"
      src="/images/hands-with-heart.svg"
      alt="Two hands with a cartoon heart between them" />
    <p class="box-body">
      Mr. Talley needs a kidney and a pancreas. We're trying to make sure he
      doesn't have to worry about providing for his kids this summer. Please
      help us out!
    </p>
  </Box>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
  }
</style>
