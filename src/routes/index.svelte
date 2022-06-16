<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import qs from 'qs';

  const query = qs.stringify({
    populate: {
      featured: {
        populate: '*',
      },
      resourceLinks: {
        populate: '*',
      },
    },
  });

  export const load: Load = async ({ fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/home-page?${query}`;
    console.log(url);
    const response = await fetch(url);
    const {
      data: { attributes },
    } = (await response.json()) as { data: { attributes: HomePage } };
    const { featured, resourceLinks } = attributes;

    let links = resourceLinks.map((link): Page => {
      const newPage = link.page.data.attributes;
      return {
        ...newPage,
        title: link.title,
      };
    });

    return {
      status: response.status,
      props: {
        featured,
        links,
      },
    };
  };
</script>

<script lang="ts">
  import FeaturedBox from '$lib/components/FeaturedBox.svelte';
  import Box from '$lib/components/Box.svelte';
  export let featured: FeaturedFundraiser, links: Page[];
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<main>
  <FeaturedBox
    href="/fundraisers/rally-for-mr-talley"
    background="var(--accent-color)">
    <h2 slot="title">{featured.title}</h2>
    <p slot="goal">
      Goal: ${featured.fundraiser.data.attributes.goal.toLocaleString('en-US')}
    </p>
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

  <div class="button-wrapper">
    <Box background="var(--button1-color)">
      <div class="button-content">
        <p>Help us out!</p>
      </div></Box>
  </div>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
    justify-content: center;
    gap: 2em;
  }

  div.button-wrapper {
    display: flex;
    flex-flow: row wrap;
  }

  div.button-content {
    display: block;
    height: 9em;
    width: 9em;
    margin: 0;
  }
</style>
