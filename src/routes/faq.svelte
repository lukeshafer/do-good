<script lang="ts">
  //import CollapsibleCard from 'svelte-collapsible-card';
  //import type { Load } from '@sveltejs/kit';
  import { onMount } from 'svelte';
  import sanitizeHtml from 'sanitize-html';
  import Box from '$lib/components/Box.svelte';

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
      const res = await fetch('http://localhost:1337/api/faqs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(checkStatus)
        .then(parseJSON);
      faqs = res.data;
      console.log('Faqs: ', faqs);

      console.log('size of faqs:', faqs.length);

      for (var i = 0; i < faqs.length; i++) {
        console.log('ID: ', faqs[i].id);
        console.log('Question: ', faqs[i]?.attributes.question);
        console.log('Answer: ', faqs[i]?.attributes.answer);
      }
    } catch (e) {
      error = e;
    }
  });
  /*
  let questionList = [
    {
      id: 1,
      question: 'Who do we help?',
      answer:
        'Do Good Collective helps disabled people, people of color, people in the LGBTQIA+ community, and more!',
      link: '',
    },
    {
      id: 2,
      question: 'Why us?',
      answer:
        "The founding members of Do Good Collective firmly believe in the power of mutual aid. We believe in using our own individual privileges to help folks in need who aren't receiving adequate help from existing institutions. We help ourselves by helping others!",
      link: '',
    },
    {
      id: 3,
      question: "What are DGC's long-term goals?",
      answer:
        "We're hoping to build a sustainable and successful future in which we care for each other, recognizing that many of us are not being cared for by the systems we live in.",
      link: '',
    },
    {
      id: 4,
      question: 'What is DGC currently working on?',
      answer:
        "Great question! Click the link below to see the fundraiser(s) we're currently working on!",
      link: '/fundraisers',
    },
    {
      id: 5,
      question: 'How do I apply for aid?',
      answer:
        'If you (or someone you know) is in need of aid, please fill out the form linked below and we will get back to you as soon as possible!',
      link: '',
    },
    {
      id: 6,
      question: 'How did DGC get started?',
      answer:
        "In May 2022, a group of friends in a Discord server came together to crowdfund a wheelchair for their friend, Enny. After the Enny's Wheels fundraiser raised over $3,300 in a week, the Discord server decided to continue crowdfunding efforts under Do Good Collective.",
      link: '',
    },
    {
      id: 7,
      question: 'Are my donations tax deductible?',
      answer:
        'Yes! Do Good Collective is parentered with a 501(c)(3), so all of your monetary donations made for Do Good Collective fundraisers are tax deductible.',
    },
    {
      id: 8,
      question: 'How can I get involved?',
      answer:
        'Click the link below to become a member of Do Good Collective!\nAlso, feel free to donate to our fundraisers and share them on social media. Challenge your friends and followers to match your donations.',
      link: '/join',
    },
  ];*/
</script>

<svelte:head>
  <title>Frequently Asked Questions</title>
</svelte:head>

<main>
  <h1>Frequently Asked Questions</h1>
  <p aria-labelledby="Click any question to see the answer!">
    (Click any question to see the answer!)
  </p>

  {#if error !== null}
    {error}
    {console.log(error)}
  {:else}
    <ul>
      {#each faqs as faq}
        <li>
          <Box>
            <h2>{faq.id} : {faq?.attributes.question}</h2>
            {@html faq?.attributes.answer}
          </Box>
        </li>
      {/each}
    </ul>
  {/if}

  <!--
  <Box background="var(--primary-color)">
    <div class="content">
      <h2>{q}</h2>
      {@html a}
    </div>
  </Box>
-->

  <!--<FAQList />-->
</main>

<style>
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(5, 3em) auto;
  }

  .content {
    padding: 1em 1em;
    position: relative;
    transition: 200ms;
  }

  main {
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
  }

  h1 {
    margin: 0 auto;
    padding: 0.25em;
    font-weight: bold;
  }

  div {
    padding: 1em;
  }

  p {
    font-style: italic;
  }
</style>
