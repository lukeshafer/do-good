<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import NavItem from '$lib/components/Nav/NavItem.svelte';
  import NavDropDown from '$lib/components/Nav/NavDropDown.svelte';
  import 'normalize.css';
  import '../colors.css';
  import '../global.css';
  import { nav } from '$lib/apiHelpers/nav.json';
  import { footer } from '$lib/apiHelpers/footer.json';
  import FooterLinks from '$lib/components/Footer/FooterLinks.svelte';
  import FooterSocials from '$lib/components/Footer/FooterSocials.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FooterCopyright from '$lib/components/Footer/FooterCopyright.svelte';
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
      {#if page.__component === 'link.navigation-link'}
        <NavItem href="/{page.page.data.attributes.slug}"
          >{page.page.data.attributes.title}</NavItem>
      {:else if page.__component === 'link.nav-drop-down'}
        <NavDropDown name={page.title}>
          {#each page.links as link}
            <NavItem href="/{link.page.data.attributes.slug}"
              >{link.page.data.attributes.title}</NavItem>
          {/each}
        </NavDropDown>
      {/if}
    {/each}
  </Navbar>
</Header>

<slot>
  <!-- Page content will go here -->
</slot>

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
