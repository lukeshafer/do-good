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

      /*
      for (var i = 0; i < socials.length; i++) {
        console.log(
          'SocialMediaLogo: ',
          socials[i]?.attributes.SocialMediaLogo
        );
        console.log('url: ', socials[i]?.attributes.url);
        console.log('logoAltText: ', socials[i]?.attributes.logoAltText);
      }
      */
    } catch (e) {
      error = e as unknown;
    }
  });
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

<footer>
  <div class="copyright">
    <h3>&copy;2022, Do Good Collective</h3>
  </div>
  <div class="container">
    <div class="resources">
      <h4>Resources</h4>
      {#each footer.resourcePages as foot}
        <li class="links">
          {@html sanitizeHtml(
            foot.content.substring(3, foot.content.length - 4)
          )}
        </li>
      {/each}
    </div>
    <div class="resources">
      <h4>DGC</h4>
      {#each footer.dgcPages as otherFoot}
        <li class="links">
          {@html sanitizeHtml(
            otherFoot.content.substring(3, otherFoot.content.length - 4)
          )}
        </li>
        <br />
      {/each}
    </div>
    <div class="resources">
      <h4>Socials</h4>
      <p class="special">Follow us on social media!</p>
      <ul class="socials">
        {#if error !== null}
          {error}
          {console.log(error)}
        {:else}
          {#each socials as social}
            <a
              class="special"
              href={social?.attributes.url}
              aria-labelledby={social?.attributes.logoAltText}
              ><img
                src="{'http://localhost:1337'}{social?.attributes
                  .SocialMediaLogo?.data?.attributes?.url}"
                alt={social?.attributes.logoAltText}
                width="40em"
                height="40em" /></a>
          {/each}
        {/if}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--primary-color);
  }

  div {
    padding: 0 0 0 0;
  }

  a {
    padding: 0%;
    text-align: left;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: none;
    text-align: center;
  }

  h4 {
    padding: none;
    text-align: center;
  }

  li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .copyright {
    padding-top: 2em;
  }
  .container {
    display: flex;
  }

  .resources {
    flex: 1;
    padding: 1em;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 0;
  }

  .links {
    display: flex;
    justify-content: center;
    padding: 0 0 0 0;
  }

  .special {
    text-align: center;
    padding: 0%;
  }

  @media (max-width: 400px) {
    .container {
      display: block;
    }
  }
</style>
