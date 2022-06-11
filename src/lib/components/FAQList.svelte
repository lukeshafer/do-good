<script lang="ts">
  let questionList = [
    { key: 'Question 1', value: 'Answer 1' },
    { key: 'Question 2', value: 'Answer 2' },
    { key: 'Question 3', value: 'Answer 3' },
  ];
</script>

<main>
  <div class="cards">
    <!--Need to work on creating a nice easy collapsible card that can then be put in an each loop for any and all questions in the QuestionList
    <CollapsibleCard>
      <h2 slot="header" class="question">header</h2>
      <div slot="body" class="answer">
        <p>test text 123</p>
      </div>
    </CollapsibleCard>-->
  </div>
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
    max-width: 40em;
    flex-wrap: wrap;
  }

  div {
    padding: 1em;
  }
</style>
