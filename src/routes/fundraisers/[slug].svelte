<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { marked } from 'marked';
  import sanitizeHtml from 'sanitize-html';

  export const load: Load = async ({ params, fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/fundraisers/${params.slug}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const fundraiser = data?.attributes as Fundraiser;
    let sanitizedStory = '';

    if (fundraiser.story) {
      let translatedStory = marked.parse(fundraiser.story);
      sanitizedStory = sanitizeHtml(translatedStory);
    }

    return {
      status: response.status,
      props: {
        title: response.ok && fundraiser.title,
        story: response.ok && sanitizedStory,
        href: response.ok && fundraiser.donationLink,
      },
    };
  };
</script>

<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import { onMount } from 'svelte';

  export let title: string, story: string, href: string;

  let sanitizedStory = '';

  // onMount(() => {
  //   // Translate Markdown to HTML
  //   // let translatedStory = marked.parse(story);
  //   // Sanitize HTML so it's safe for the browser
  //   // sanitizedStory = DOMPurify.sanitize(translatedStory);
  // });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <Box background="var(--primary-color)">
    <div class="content">
      <h2>{title}</h2>
      {@html story}
      <div class="link-wrapper">
        <Box background="var(--accent-color)" {href} target="_blank">
          <p class="link" style="width:auto">Donate Now!</p>
        </Box>
      </div>
    </div>
  </Box>
</main>

<style>
  main {
    max-width: 40em;
    padding: 0 2em;
    color: var(--secondary-color);
  }

  .content {
    padding: 1em 2em;
  }

  .link-wrapper {
    width: 10em;
    font-size: 1.3em;
    margin: 1em auto;
  }
</style>
