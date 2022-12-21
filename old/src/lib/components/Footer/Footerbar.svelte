<script lang="ts">
  import FooterSocials from './Socials.svelte';
  import type { Load } from '@sveltejs/kit';
  import FooterCopyright from './FooterCopyright.svelte';
  import Footer from '../Footer.svelte';
  import FooterLinks from './FooterLinks.svelte';
  import { footer } from './FooterSections.svelte';

  export const load: Load = async ({ fetch }) => {
    const navURL = `/api/layout.json`;
    const response = await fetch(navURL);
    const { footer } = await response.json();
    return {
      status: response.status,
      props: {
        footer,
      },
    };
  };

  // console.log(footer.resourcePages);
  // console.log(footer.dgcPages);
</script>

<Footer>
  <FooterCopyright />
  <div class="container">
    <FooterLinks items={footer.resourcePages} header="Resources" />
    <FooterLinks items={footer.dgcPages} header="DGC" />
    <FooterSocials />
  </div>
</Footer>
<svelte:body />

<style>
  .container {
    display: flex;
  }
</style>
