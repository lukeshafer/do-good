<script lang="ts">
  import FooterDgc from './FooterDGC.svelte';
  import FooterSocials from './Socials.svelte';
  import FooterResources from './FooterResources.svelte';
  import type { Load } from '@sveltejs/kit';

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
  <div class="copyright">
    <h3>&copy;2022, Do Good Collective</h3>
  </div>
  <div class="container">
    <FooterResources />
    <FooterDgc />

    <FooterSocials />
  </div>
</footer>
<svelte:body />

<div class="copyright">
  <h3>&copy;2022, Do Good Collective</h3>
</div>
<div class="container" />
