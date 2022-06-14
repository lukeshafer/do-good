<script context="module" lang="ts">
  import Box from '$lib/components/Box.svelte';
  import type { Load } from '@sveltejs/kit';
  export const load: Load = ({ error, status, params }) => {
    console.log(error);
    return {
      props: {
        status: status,
        message: error?.message,
        slug: params.slug,
        error: error,
      },
    };
  };
</script>

<script lang="ts">
  import CollapsibleCard from 'svelte-collapsible-card';
  export let message: string, status: number, slug: string, error: Error;
</script>

<svelte:head><title>Error {status}</title></svelte:head>

<div class="container">
  <Box background="white">
    <div class="box-content">
      <h1>{status}</h1>
      {#if message !== ''}
        <p>{message}</p>
      {:else if status === 404}
        <h2>The page <strong>{slug}</strong> was not found!</h2>
        <p>Click a link above to return to safety!</p>
      {/if}
      <CollapsibleCard>
        <h3 slot="header">Click here to see full error log</h3>
        <code slot="body">{error.stack}</code>
      </CollapsibleCard>
    </div>
  </Box>
</div>

<style>
  .container {
    /* max-width: 50em; */
    width: fit-content;
    margin: auto;
  }

  strong {
    color: var(--error-color);
  }

  .box-content {
    margin: 2em;
  }

  code {
    white-space: pre-line;
    text-align: left;
    display: block;
    font-size: 0.7em;
    border: 1px solid black;
    background-color: var(--background-color);
  }
</style>
