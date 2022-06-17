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
    const url = `${apiPath}/api/home-page?${query}`;
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

  const featuredIcon = featured.icon.data.attributes;
  const featuredFundraiser = featured.fundraiser.data.attributes;
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<main>
  <FeaturedBox
    href="/fundraisers/{featuredFundraiser.slug}"
    background="var(--accent-color)">
    <h2 slot="title">{featured.title}</h2>
    <p slot="goal">
      Goal: ${featuredFundraiser.goal.toLocaleString('en-US')}
    </p>
    <img
      width="100"
      slot="icon"
      src="{import.meta.env.VITE_API_PATH}{featuredIcon.url}"
      alt={featuredIcon.alternativeText} />
    <p slot="body">
      {featured.shortDescription}
    </p>
  </FeaturedBox>

  <div class="button-wrapper">
    {#each links as link}
      <div class="button">
        <Box background="var(--button1-color)" href="/{link.slug}">
          <div class="button-content">
            <p>{link.title}</p>
          </div>
        </Box>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
    justify-content: center;
    gap: 2em;
  }

  .button {
    width: 10em;
  }

  div.button-wrapper {
    display: grid;
    width: min(150%, 90vw);
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    grid-auto-rows: auto;
    place-items: center;
    gap: 2em;
  }

  div.button-content {
    display: block;
    height: 9em;
    width: 9em;
    margin: 0;
  }
</style>
