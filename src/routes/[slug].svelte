<!-- This is a template for generic pages used by the Page collection type -->
<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import sanitizeHtml from 'sanitize-html';

  export const load: Load = async ({ params, fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/api/pages/${params.slug}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const page = data?.attributes as Page;
    let sanitizedContent = sanitizeHtml(page?.content);

    return {
      status: response.status,
      props: {
        title: response.ok && page.title,
        content: response.ok && sanitizedContent,
      },
    };
  };
</script>

<script lang="ts">
  export let title: string, content: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div class="content">
    {@html content}
  </div>
</main>

<style>
  main {
    max-width: 40em;
    padding: 0 2em;
    /* color: var(--secondary-color); */
    color: black;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    font-size: 1.5em;
    gap: 0.25em;
  }

  .content :global(img) {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 16px;
    max-width: 80%;
  }

  .content :global(h1) {
    margin: 0 auto;
    padding: 0 1em;
    font-weight: bold;
  }

  .content :global(p) {
    /* display: flex; */
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    margin: 1em;
  }
</style>
