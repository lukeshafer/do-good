<script lang="ts">
  //import CollapsibleCard from 'svelte-collapsible-card';
  //import type { Load } from '@sveltejs/kit';
  import { onMount } from 'svelte';
  import sanitizeHtml from 'sanitize-html';
  import CollapsibleCard from 'svelte-collapsible-card';

  let faqs = [];
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
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/faqs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      faqs = res.data;

      /* The following is for troubleshooting - leaving in here strictly in case stuff randomly stops working!
      console.log('Faqs: ', faqs);

      console.log('size of faqs:', faqs.length);

      for (var i = 0; i < faqs.length; i++) {
        console.log('ID: ', faqs[i].id);
        console.log('Question: ', faqs[i]?.attributes.question);
        console.log('Answer: ', sanitizeHtml(faqs[i]?.attributes.answer));
      }
      */
    } catch (e) {
      error = e;
    }
  });
</script>

<svelte:head>
  <title>Frequently Asked Questions</title>
</svelte:head>

<main>
  <h1>Frequently Asked Questions</h1>
  <p class="help" aria-labelledby="Click any question to see the answer!">
    (Click any question to see the answer!)
  </p>

  {#if error !== null}
    {error}
    {console.log(error)}
  {:else}
    <ul>
      {#each faqs as faq}
        <li class="faq">
          <CollapsibleCard>
            <div slot="header" class="header">
              <h2
                media="screen"
                class="question"
                aria-labelledby={faq.question}>
                {faq?.attributes.question}
              </h2>
            </div>
            <div
              slot="body"
              class="answer"
              aria-labelledby={(faq?.attributes.answer).replace(
                /<[^>]+>/g,
                ''
              )}>
              {@html sanitizeHtml(faq?.attributes.answer)}
            </div>
          </CollapsibleCard>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style lang="postcss">
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(5, 3em) auto;
  }

  .help {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
  }

  li {
    margin-bottom: 2em;
    width: 100%;

    & h2 {
      background-color: #00000066;
    }

    & .answer {
      width: 95%;
      display: flex;
      padding: 0.5em;
      justify-content: flex-start;

      & > :global(*) {
        margin: 0;
        padding: 0.5em;
        background-color: #00000066;
      }
    }

    & .answer > :global(ol) {
      list-style-type: circle;
      padding-left: 2em;
      width: 100%;
    }

    &:nth-of-type(3n-2) {
      & .header {
        background-color: var(--box1-color);
      }
      & .answer {
        background-color: var(--box1-accent-color);
      }
    }

    &:nth-of-type(3n-1) {
      & .header {
        background-color: var(--box2-color);
      }
      & .answer {
        background-color: var(--box2-accent-color);
      }
    }

    &:nth-of-type(3n) {
      & .header {
        background-color: var(--box3-color);
      }
      & .answer {
        background-color: var(--box3-accent-color);
      }
    }
  }

  .header {
    padding: 0.5em;
  }

  h2 {
    font-size: 2em;
  }

  .link {
    display: flex;
    justify-content: center;
  }

  .faq {
    display: flex;
    text-align: left;
  }

  main {
    max-width: 40em;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0.5em;
    width: 100%;
    margin: 0;
    color: var(--primary-color);
    font-family: var(--body-font);
  }

  h2 {
    display: flex;
    justify-self: flex-start;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    padding: 0.5em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    width: 95%;
  }
</style>
