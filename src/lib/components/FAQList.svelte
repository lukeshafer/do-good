<script lang="ts">
  import CollapsibleCard from 'svelte-collapsible-card';

  let questionList = [
    { id: 1, question: 'Question 1', answer: 'Answer 1' },
    { id: 2, question: 'Question 2', answer: 'Answer 2' },
    { id: 3, question: 'Question 3', answer: 'Answer 3' },
  ];
</script>

<main>
  <ul>
    <!--Need to work on creating a nice easy collapsible card that can then be put in an each loop for any and all questions in the QuestionList-->
    {#each questionList as item}
      <li>
        {#if !(item.id % 2 === 0)}
          <CollapsibleCard>
            <h2 slot="header" class="question odd">{item.question}</h2>
            <div slot="body" class="answer">
              <p>{item.answer}</p>
            </div>
          </CollapsibleCard>
        {:else}
          <CollapsibleCard>
            <h2 slot="header" class="question even">{item.question}</h2>
            <div slot="body" class="answer">
              <p>{item.answer}</p>
            </div>
          </CollapsibleCard>
        {/if}
      </li>
    {/each}
  </ul>
</main>

<style>
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(5, 3em) auto;
  }

  .header {
    padding: 0.5em;
    display: flex;
  }

  .even {
    background-color: #cf8790;
  }

  .odd {
    background-color: var(--accent-color);
  }

  .answer {
    background-color: rgb(255, 255, 255, 0.7);
  }
  .content {
    padding: 1em 1em;
    position: relative;
    transition: 200ms;
  }

  main {
    max-width: 40em;
    flex-wrap: wrap;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
    padding: 2em;
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
    width: 100%;
    padding: 0.5em;
    display: flex;
  }

  div {
    padding: 1em;
  }
</style>
