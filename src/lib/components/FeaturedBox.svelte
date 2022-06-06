<script lang="ts">
  export let background: string;
  export let href = '';
  import Box from '$lib/components/Box.svelte';
</script>

<Box {background} {href}>
  <div class="grid-wrapper">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="goal">
      <slot name="goal" />
    </div>
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="body">
      <slot name="body" />
    </div>
  </div>
</Box>

<style>
  .grid-wrapper {
    display: grid;
    font-size: min(0.8em, 2vw);
    grid-template-columns: 6em 7em 20em 10em;
    grid-template-rows: repeat(6, 3em);
  }

  .title {
    grid-column: 3 / end;
    grid-row: 1 / 3;
  }

  .title > :global(*::first-line) {
    font-size: 0.7em;
    text-shadow: 0 0.07em 0.1em var(--h-shadow-secondary-color);
  }

  .title > :global(*) {
    text-indent: -1.5em;
    text-align: left;
    font: 400 4em Genty;
    color: white;
    text-shadow: 0 0.07em 0.1em var(--h-shadow-primary-color);
    margin: 0;
    line-height: 1;
  }

  .goal {
    grid-column: 4;
    text-align: left;
    font-size: 1.2em;
    grid-row: 2 /3;
  }

  .goal > :global(*) {
    font: 400 2em Podkova;
    color: var(--text-accent-color);
    text-shadow: 0.05em 0.05em 1px rgba(var(--text-accent-values), 0.4);
    line-height: 1;
    margin: 0;
  }

  .icon {
    grid-column: 1 / 3;
    grid-row: 2 / 6;
  }

  .icon > :global(*) {
    width: 90%;
    filter: drop-shadow(5px 5px #657599);
  }

  .body {
    background-color: rgb(255, 255, 255, 0.7);
    grid-column: 3 / 5;
    grid-row: 4 / 7;
    height: 90%;
    width: 90%;
    font-size: 1.1em;
  }

  .body > :global(*) {
    margin: 0.2em 1em;
    font: 600 1em 'Fira Code';
    text-align: left;
    letter-spacing: 0.07em;
    color: #342e7a;
  }
</style>
