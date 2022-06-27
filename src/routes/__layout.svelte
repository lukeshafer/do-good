<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const navURL = `/api/layout.json`;
    const response = await fetch(navURL);
    const { nav, footer } = await response.json();
    return {
      status: response.status,
      props: {
        nav: response.ok && nav,
        footer: response.ok && footer,
      },
    };
  };
</script>

<script lang="ts">
  import 'normalize.css';
  import '../colors.css';
  import '../global.css';
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import NavItem from '$lib/components/Nav/NavItem.svelte';
  import NavDropDown from '$lib/components/Nav/NavDropDown.svelte';
  import type { nav, footer } from './api/layout.json';
  import FooterLinks from '$lib/components/Footer/FooterLinks.svelte';
  import FooterSocials from '$lib/components/Footer/FooterSocials.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FooterCopyright from '$lib/components/Footer/FooterCopyright.svelte';
  import Background from '$lib/components/Background.svelte';
  import Button from '$lib/components/DesignBlocks/Button.svelte';
  import { page } from '$app/stores';

  export let nav: nav, footer: footer;
</script>

<Background />

<Header>
  <Logo width="10em" />
</Header>

<div class="skip-to-content">
  <a href="#main"><Button type="style-only">Skip To Content?</Button></a>
  <div class="dark-background" />
</div>

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
    {#if page.__component === 'link.navigation-link' && page.page.data}
      <NavItem href="/{page.page.data.attributes.slug}">{page.title}</NavItem>
    {:else if page.__component === 'link.nav-drop-down'}
      <NavDropDown name={page.title}>
        {#each page.links as link}
          {#if link.page.data}
            <NavItem href="/{link.page.data.attributes.slug}" inDropdown={true}
              >{link.title}</NavItem>
          {/if}
        {/each}
        {#each page.fundraisers as fundraiser}
          {#if fundraiser.fundraiser.data}
            <NavItem
              href="/fundraisers/{fundraiser.fundraiser.data.attributes.slug}"
              inDropdown={true}>{fundraiser.title}</NavItem>
          {/if}
        {/each}
      </NavDropDown>
    {:else if page.__component === 'link.fundraiser-link' && page.fundraiser.data}
      <NavItem href="/fundraisers/{page.fundraiser.data.attributes.slug}"
        >{page.title}</NavItem>
    {/if}
  {/each}
</Navbar>

<span id="main" />

<slot>
  <!-- Sveltekit inserts page content here -->
</slot>

<Footer>
  <FooterCopyright />
  <div class="container">
    <FooterLinks items={footer.resourcePages} header="Resources" />
    <FooterLinks items={footer.dgcPages} header="DGC" />
    <FooterSocials />
  </div>
</Footer>

<style lang="postcss">
  .container {
    display: flex;
  }
  div {
    padding: 0 0 0 0;
  }

  .skip-to-content {
    & > a {
      top: 0;
      right: 1em;
      position: absolute;
      transform: translateY(-150%);
      transition: transform 0.3s;
      z-index: 2;
      opacity: 0;

      & :global(*) {
        opacity: 0;
      }
    }

    & .dark-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      visibility: hidden;
    }
  }

  .skip-to-content > a:focus-visible {
    transform: translateY(50%);
    opacity: 1;

    & :global(*) {
      opacity: 1;
    }

    & + .dark-background {
      opacity: 0.5;
      visibility: visible;
    }
  }

  @media (max-width: 400px) {
    .container {
      display: block;
    }
  }
</style>
