<script lang="ts">
  import 'normalize.css';
  import { onMount } from 'svelte';

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
      const res = await fetch(
        `${import.meta.env.VITE_API_PATH}` + '/api/socials?populate=*',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
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
            src="{`${import.meta.env.VITE_API_PATH}`}{social?.attributes
              .SocialMediaLogo?.data?.attributes?.url}"
            alt={social?.attributes.logoAltText}
            width="40em"
            height="40em" /></a>
      {/each}
    {/if}
  </ul>
</div>

<style>
  h4 {
    padding: none;
    text-align: center;
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
  .special {
    text-align: center;
    padding: 0%;
  }
</style>
