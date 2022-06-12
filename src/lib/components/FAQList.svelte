<!--TODO
  - Get link to Google Form/Application for aid to link question id: 5
  - Confirm questions/answers with Contributors
-->
<script lang="ts">
  import CollapsibleCard from 'svelte-collapsible-card';
  import NavItem from './Nav/NavItem.svelte';

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
  ];
</script>

<main>
  <ul>
    <!--Need to work on creating a nice easy collapsible card that can then be put in an each loop for any and all questions in the QuestionList-->
    {#each questionList as item}
      <li>
        {#if !(item.id % 2 === 0)}
          <CollapsibleCard>
            <div slot="header">
              <h2
                media="screen"
                class="question odd"
                aria-labelledby={item.question}>
                {item.question}
              </h2>
            </div>
            <div slot="body" class="answer" aria-labelledby={item.answer}>
              <p aria-labelledby={item.answer}>{item.answer}</p>
            </div>
          </CollapsibleCard>
        {:else}
          <CollapsibleCard>
            <div slot="header">
              <h2
                media="screen"
                class="question even"
                aria-labelledby={item.question}>
                {item.question}
              </h2>
            </div>
            <div slot="body" class="body answer" aria-labelledby={item.answer}>
              {#if item.link === ''}
                <p>{item.answer}</p>
              {:else}
                <p aria-labelledby={item.answer}>{item.answer}</p>
                <p class="link">
                  <a
                    href={item.link}
                    aria-labelledby="Click here to the appropriate screen"
                    >Click here!</a>
                </p>
              {/if}
            </div>
          </CollapsibleCard>
        {/if}
      </li>
    {/each}
  </ul>
</main>

<style>
  .even {
    background-color: #7db2aa;
  }

  .odd {
    background-color: #8e9cdb;
  }

  .answer {
    background-color: #ffe389;
    width: 100%;
    padding: 0.5em;
    display: flex;
    width: 100%;
    padding: 0.5em;
    justify-content: center;
  }

  .link {
    display: flex;
    justify-content: center;
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
    color: rgb(50, 50, 50);
    font-size: 1.1rem;
  }

  li {
    margin-bottom: 2em;
    width: 100%;
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
