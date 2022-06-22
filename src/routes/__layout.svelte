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
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import sanitizeHtml from 'sanitize-html';
  import FooterLinks from '$lib/components/Footer/FooterLinks.svelte';
  import FooterSocials from '$lib/components/Footer/FooterSocials.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FooterCopyright from '$lib/components/Footer/FooterCopyright.svelte';
  import Aid from './aid.svelte';

  export let nav: {
    pages: Page[];
    includeHomePage: boolean;
    includeFAQ: boolean;
    includeContactForm: boolean;
  };

  export let footer: { resourcePages: Page[]; dgcPages: Page[] };
  // console.log(footer.resourcePages);
  // console.log(footer.dgcPages);

  /*
  import type {
    attribute_to_object,
    loop_guard,
    set_attributes,
  } from 'svelte/internal';
  import Contact from './contact.svelte';
  */

  /*
  let socials = [];
  let error = null as unknown;

  onMount(async () => {
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const res = await fetch('http://localhost:1337/api/socials?populate=*', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      socials = res.data;

      for (var i = 0; i < socials.length; i++) {
        console.log(
          'SocialMediaLogo: ',
          socials[i]?.attributes.SocialMediaLogo
        );
        console.log('url: ', socials[i]?.attributes.url);
        console.log('logoAltText: ', socials[i]?.attributes.logoAltText);
      }
    } catch (e) {
      error = e as unknown;
    }
  });*/
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
