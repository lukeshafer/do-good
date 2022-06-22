<script lang="ts">
  import 'normalize.css';
  import '../colors.css';
  import '../global.css';
  import { onMount } from 'svelte';
  import FooterLinks from '$lib/components/Footer/FooterLinks.svelte';
  import FooterSocials from '$lib/components/Footer/FooterSocials.svelte';

  export let footer: { resourcePages: Page[]; dgcPages: Page[] };
  // console.log(footer.resourcePages);
  // console.log(footer.dgcPages);

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

<div class="container">
  <div>
    <h4>Resources</h4>
    {#each footer.resourcePages as foot}
      <FooterLinks
        htmlString={foot.content.substring(3, foot.content.length - 4)} />
    {/each}
  </div>
  <div>
    <h4>DGC</h4>
    {#each footer.dgcPages as otherFoot}
      <FooterLinks
        htmlString={otherFoot.content.substring(
          3,
          otherFoot.content.length - 4
        )} />
      <br />
    {/each}
  </div>
  <div>
    <h4>Socials</h4>
    <p class="special">Follow us on social media!</p>
    <FooterSocials />
  </div>
</div>

<style>