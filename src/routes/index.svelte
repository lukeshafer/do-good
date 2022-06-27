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

  const tileColors = [
    'button1-color',
    'button2-color',
    'button3-color',
    'button4-color',
  ];

  export const load: Load = async ({ fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/api/home-page?${query}`;
    console.log(url);
    const response = await fetch(url);
    const {
      data: { attributes },
    } = (await response.json()) as { data: { attributes: HomePage } };
    const { featured = {}, resourceLinks = [] } = attributes;

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
  import RallyForMrTalley from '$lib/components/FeaturedFundraisers/RallyForMrTalley.svelte';
  import PrideFull from '$lib/components/FeaturedFundraisers/PrideFull.svelte';
  import Box from '$lib/components/Box.svelte';
  export let featured: FeaturedFundraiser, links: Page[];

  const featuredIcon = featured.icon.data.attributes;
  const featuredFundraiser = featured.fundraiser.data.attributes;
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<main>
  <h1>Do Good Collective</h1>
  <PrideFull />
  <RallyForMrTalley />
</main>

<style>
  h1 {
    font: 4.5em 'Special Elite', 'Courier New', monospace;
    text-transform: lowercase;
    color: var(--heading-text-color);
    text-shadow: 0 0 0.5rem rgba(var(--heading-text-values), 0.75);
  }
  main {
    display: grid;
    justify-items: center;
    justify-content: center;
    gap: 2em;
  }
</style>
