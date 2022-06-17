<!-- This will populate the navbar automatically -->
<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import qs from 'qs';

  const query = qs.stringify({
    fields: '*',
    populate: {
      pages: {
        populate: '*',
      },
    },
  });

  export const load: Load = async ({ fetch }) => {
    const apiPath = import.meta.env.VITE_API_PATH as string;
    const url = `${apiPath}/api/navigation-menu?${query}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data as { attributes: NavigationMenu };
    const {
      includeHomePage,
      includeFAQ,
      includeContactForm,
      pages: pageObjects,
    } = attributes;

    let pages = pageObjects.map((page): Page => {
      const newPage = page.page.data.attributes;
      return {
        ...newPage,
        title: page.title,
      };
    });

    return {
      status: response.status,
      props: {
        includeHomePage,
        includeFAQ,
        includeContactForm,
        pages,
      },
    };
  };
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import NavItem from '$lib/components/Nav/NavItem.svelte';
  import 'normalize.css';
  import '../colors.css';
  import '../global.css';

  export let includeHomePage: boolean,
    includeFAQ: boolean,
    includeContactForm: boolean,
    pages: Page[];
</script>

<Header>
  <Logo width="10em" />
  <Navbar>
    {#if includeHomePage}
      <NavItem href="/">Home</NavItem>
    {/if}
    {#if includeFAQ}
      <NavItem href="/faq">FAQ</NavItem>
    {/if}
    {#if includeContactForm}
      <NavItem href="/contact">Contact</NavItem>
    {/if}
    {#each pages as page}
      <NavItem href="/{page.slug}">{page.title}</NavItem>
    {/each}
    <!-- <NavItem href="/">What is DGC?</NavItem>
    <NavItem href="/">How can I help?</NavItem>
    <NavItem href="/about">About Us</NavItem>
    <NavItem href="/join">Join</NavItem>
    <NavItem href="/contact">Contact Us</NavItem>
    <NavItem href="/aid">Apply For Aid</NavItem> -->
  </Navbar>
</Header>

<slot />

<style>
</style>
