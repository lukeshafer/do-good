<script context="module" lang="ts">
  import Box from '$lib/components/Box.svelte';
  import type { Load } from '@sveltejs/kit';
  export const load: Load = ({ error, status }) => {
    return {
      props: {
        title: `${status}: ${error?.message}`,
      },
    };
  };
</script>

<script lang="ts">
  export let title: any;
</script>

<div class="container">
  <Box background="white">
    <p>{title}</p>
  </Box>
</div>

<style>
  .container {
    max-width: 50em;
    margin: auto;
  }
</style>
