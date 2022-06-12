<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<main>
  <h1>About Do Good Collective</h1>
  <img
    media="screen"
    width="100%"
    src="/images/be-the-moon.png"
    alt="Night scene with stars and shadows of trees with a quote by Yasmin Mogahed. The quote says: Be the moon in somebody's night. Be the ease in somebody's hardship." />
  <p>
    Do Good Collective is a mutual aid fundraising group focused on helping
    others and raising the needs of disabled people, people of color, people in
    the LGBTQIA+ community, and more!
  </p>
  <p>
    We're a community of over thirty people from various fields and experiences:
    artists, developers, students, organizers, parents. Most of us are
    marginalized. We're always looking for more people to help and to help us!
  </p>
  <p>
    DGC was formed in May 2022 following the success of our Enny’s Wheels
    fundraiser, which raised over $3,300 in a week. We’re hoping to build a
    sustainable and successful future in which we care for each other,
    recognizing that many of us are not being cared for by the systems we live
    in.
  </p>
  <p>
    We're partnered with Guardians of Heart, Inc., a 501(c)3 nonprofit
    organization, in order to increase the impact of our charitable fundraising.
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
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    font-size: 1.5em;
    gap: 0.25em;
  }

  img {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 16px;
    max-width: 80%;
  }

  h1 {
    margin: 0 auto;
    padding: 1em;
    font-weight: bold;
  }

  div {
    padding: 1em;
  }

  p {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    margin: 1em;
  }
</style>
