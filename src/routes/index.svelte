<script lang="ts">
  import FeaturedBox from '$lib/components/FeaturedBox.svelte';
  import Box from '$lib/components/Box.svelte';
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<main>
  <FeaturedBox background="var(--accent-color)">
    <h2 slot="title">Rally for<br /> Mr. Talley</h2>
    <p slot="goal">Goal: $5,000</p>
    <img
      width="100"
      slot="icon"
      src="/images/hands-with-heart.svg"
      alt="Two hands with a cartoon heart between them" />
    <p slot="body">
      Mr. Talley needs a kidney and a pancreas. We're trying to make sure he
      doesn't have to worry about providing for his kids this summer. Please
      help us out!
    </p>
  </FeaturedBox>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
  }
</style>
