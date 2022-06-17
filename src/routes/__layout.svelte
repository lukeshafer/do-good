<!-- This will populate the navbar automatically -->
<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import qs from 'qs';

  const queryNav = qs.stringify({
    fields: '*',
    populate: {
      pages: {
        populate: '*',
      },
    },
  });

  /*
  const queryFooter = qs.stringify({
    populate: {
      footerResourceLinks: {
        populate: '*',
      },
    },
  });
  */

  export const load: Load = async ({ fetch }) => {
    /* Promise.all - how to correctly separate the data ( .then(function (data))
    const apiPath = import.meta.env.VITE_API_PATH as string;
    Promise.all([
      fetch('${apiPath}/navigation-menu?${queryNav}'),
      fetch('${apiPath}/footer?${queryFooter}'),
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        //Log data
        //Do stuff
      })
      .catch(function (error) {
        //if there's an error log it
        console.log(error);
      });
      */

    const apiPath = import.meta.env.VITE_API_PATH as string;
    console.log('apiPath = ', apiPath);
    const url = `${apiPath}/api/navigation-menu?${queryNav}`;
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
      const newPage = page.page.data?.attributes;
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
    /*
    const footerUrl = '${apiPath}/footer?{queryFooter}';
    const fResponse = await fetch(footerUrl);
    const { fData } = await fResponse.json();
    const { fAttributes } = fData;
    const { footerResourceLinks: resourceObjects, socials: socialObjects } =
      fAttributes;

    let resourcePages = resourceObjects.map((page): Page => {
      const newResourcePage = page.page.fData.fAttributes;
      return {
        ...newResourcePage,
        title: page.title,
      };
    });
    */
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
  /*
  import type {
    attribute_to_object,
    loop_guard,
    set_attributes,
  } from 'svelte/internal';
  import Contact from './contact.svelte';
  */

  let socials = [];
  let error = null;

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
      error = e;
    }
  });

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

<footer>
  {#if error !== null}
    {error}
    {console.log(error)}
  {:else}
    <ul>
      {#each socials as social}
        <li class="social">
          <a
            href={social?.attributes.url}
            aria-labelledby={social?.attributes.logoAltText}
            ><img
              src="{'http://localhost:1337'}{social?.attributes.SocialMediaLogo
                ?.data?.attributes?.url}"
              alt={social?.attributes.logoAltText}
              width="30em"
              height="30em" /></a>
        </li>
      {/each}
    </ul>
  {/if}
</footer>

<style>
</style>
