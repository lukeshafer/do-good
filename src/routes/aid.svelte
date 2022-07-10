<script>
  //Script for Aid Application page
  import PaperSheet from '$lib/components/DesignBlocks/PaperSheet.svelte';
  import Button from '$lib/components/DesignBlocks/Button.svelte';
</script>

<svelte:head>
  <title>Apply For Aid</title>
</svelte:head>

<main>
  <!--Main for Aid Application-->
  <PaperSheet>
    I am applying for:
    <div>
      <Button type="link" href="/forms/GeneralApplication">General Aid</Button>
      <Button type="link" href="/forms/PrideFullApplication"
        >PrideFull Aid</Button>
    </div>
  </PaperSheet>
</main>

<style>
  main {
    display: flex;
  }
  iframe {
    display: flex;
    justify-content: flex-start;
  }
</style>
