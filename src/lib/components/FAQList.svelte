<script lang="ts">
  import CollapsibleCard from 'svelte-collapsible-card';

  let questionList = [
    { id: 1, question: 'Who do we help?', answer: 'Answer 1' },
    { id: 2, question: 'Why Do Good Collective?', answer: 'Answer 2' },
    { id: 3, question: "What are DGC's long-term goals?", answer: 'Answer 3' },
    {
      id: 4,
      question: 'What is DGC currently working on?',
      answer: 'Answer 4',
    },
    { id: 5, question: 'How do I apply for aid?', answer: 'Answer 5' },
    {
      id: 6,
      question: 'How did Do Good Collective get started?',
      answer: 'Answer 6',
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
            <h2
              slot="header"
              class="question odd"
              aria-labelledby={item.question}>
              {item.question}
            </h2>
            <div slot="body" class="answer" aria-labelledby={item.answer}>
              <p>{item.answer}</p>
            </div>
          </CollapsibleCard>
        {:else}
          <CollapsibleCard>
            <h2
              slot="header"
              class="question even"
              aria-labelledby={item.question}>
              {item.question}
            </h2>
            <div slot="body" class="answer" aria-labelledby={item.answer}>
              <p>{item.answer}</p>
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
  }

  main {
    max-width: 40em;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0.5em;
    width: auto;
    margin: 0 auto;
    color: rgb(50, 50, 50);
    font-size: 1.1rem;
  }

  li {
    margin-bottom: 2em;
    width: 100%;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-self: stretch;
    margin: 0;
    width: 95%;
    padding: 0.5em;
    display: flex;
  }

  div {
    display: flex;
    justify-content: flex-start;
    padding: 1em;
    width: 100%;
  }
</style>
