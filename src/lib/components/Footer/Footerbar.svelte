<script lang="ts">
  import FooterDgc from './FooterDGC.svelte';
  import FooterSocials from './Socials.svelte';
  import FooterResources from './FooterResources.svelte';
  import type { Load } from '@sveltejs/kit';
  import FooterCopyright from './FooterCopyright.svelte';

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

<footer>
  <FooterCopyright />
  <div class="container">
    <FooterResources />
    <FooterDgc />
    <FooterSocials />
  </div>
</footer>
<svelte:body />

<style>
  .container {
    display: flex;
  }
</style>
