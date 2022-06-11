<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<main>
  <h1>About Do Good Collective</h1>
  <h2>What is Do Good Collective?</h2>
  <p>
    Do Good Collective is a mutual aid fundraising group focused on helping
    others and raising the neds of disabled people, people of color, people in
    the LGBTQIA+ community, and more!
  </p>
  <br />
  <p>
    DGC was formed in May 2022 following the success of our Enny's Wheels
    fundraiser, which raised over $3,000 in a week. We're hoping to build a
    sustainable and successful future in which we care for each other,
    recognizing that many of us are not being cared for by the systems we live
    in.
  </p>
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
    flex-wrap: wrap;
  }

  div {
    padding: 1em;
  }
</style>
