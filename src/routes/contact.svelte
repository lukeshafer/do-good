<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import qs from 'qs';

  const query = qs.stringify({
    populate: {
      fields: {
        populate: 'entries',
      },
    },
  });

  export const load: Load = async ({ fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/api/contact-form?${query}`;
    const response = await fetch(url);
    const {
      data: {
        attributes: { fields },
      },
    } = (await response.json()) as {
      data: {
        attributes: { fields: ContactField[] };
      };
    };

    return {
      status: response.status,
      props: {
        fields,
      },
    };
  };
</script>

<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  export let fields: ContactField[];
</script>

<main>
  <Box background="var(--accent-color)">
    <h1>Contact Us</h1>
    <div class="content">
      <ContactForm {fields} />
    </div>
  </Box>
</main>

<style>
  .content {
    padding: 1em 1em;
    position: relative;
    transition: transform 200ms;
    max-width: 85vw;
    width: 40em;
  }

  main {
    max-width: 40em;
  }

  h1 {
    font-weight: bold;
  }

  div {
    padding: 1em;
  }
</style>
