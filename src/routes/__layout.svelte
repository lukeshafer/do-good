<!-- This will populate the navbar automatically -->
<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const navURL = `/api/layout.json`;
    const response = await fetch(navURL);
    const { nav, footer } = await response.json();
    return {
      status: response.status,
      props: {
        nav,
        footer,
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
  import FooterLinks from '$lib/components/Footer/FooterLinks.svelte';
  import FooterSocials from '$lib/components/Footer/FooterSocials.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FooterCopyright from '$lib/components/Footer/FooterCopyright.svelte';

  export let nav: {
    pages: Page[];
    includeHomePage: boolean;
    includeFAQ: boolean;
    includeContactForm: boolean;
  };

  export let footer: { resourcePages: Page[]; dgcPages: Page[] };
  // console.log(footer.resourcePages);
  // console.log(footer.dgcPages);
</script>

<Header>
  <Logo width="10em" />
  <Navbar>
    {#if nav.includeHomePage}
      <NavItem href="/">Home</NavItem>
    {/if}
    {#if nav.includeFAQ}
      <NavItem href="/faq">FAQ</NavItem>
    {/if}
    {#if nav.includeContactForm}
      <NavItem href="/contact">Contact</NavItem>
    {/if}
    {#each nav.pages as page}
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

<Footer>
  <FooterCopyright />
  <div class="container">
    <FooterLinks items={footer.resourcePages} header="Resources" />
    <FooterLinks items={footer.dgcPages} header="DGC" />
    <FooterSocials />
  </div>
</Footer>

<style>
  .container {
    display: flex;
  }
  div {
    padding: 0 0 0 0;
  }
  @media (max-width: 400px) {
    .container {
      display: block;
    }
  }
</style>
