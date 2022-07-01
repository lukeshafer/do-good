<script lang="ts">
  import PaperSheet from '../DesignBlocks/PaperSheet.svelte';
  import Photograph from '../DesignBlocks/Photograph.svelte';
  import Button from '../DesignBlocks/Button.svelte';
</script>

<div class="grid-wrapper">
  <div class="title">
    <h2>
      <span class="one">Rally for </span><span class="two">Mr. Talley</span>
    </h2>
  </div>
  <div class="body">
    <PaperSheet>
      <p>Mr. Talley needs a kidney and a pancreas.</p>
      <p>
        We’re raising $5,000 to help make sure he has a stress free summer with
        his kids!
      </p>
    </PaperSheet>
  </div>
  <div class="photo">
    <Photograph />
  </div>
  <div class="button">
    <Button href="/fundraisers/rally-for-mr-talley">More info</Button>
  </div>
</div>

<style lang="postcss">
  .grid-wrapper {
    margin: 0;
    display: grid;
    font-size: min(0.8em, 2vw);
    width: 50em;
    grid-template-columns: 20em 1fr;
    grid-template-rows: 5em 5em auto auto auto;
  }

  .title {
    grid-column: 1 / end;
    grid-row: 1 / 3;
    height: 100%;
    width: 100%;
    font-size: 1rem;
  }

  h2 {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 0.6em 1fr;
    margin: 0;
    font-size: 2.5em;

    & > span {
      display: block;
      white-space: nowrap;

      &::first-letter {
        text-decoration: underline;
      }
    }

    & > span.one {
      grid-column: 1;
      grid-row: 1;
      text-align: right;
    }

    & > span.two {
      grid-column: 2;
      grid-row: 2;
      text-align: left;
    }
  }

  .body {
    grid-row: 3;
    grid-column: 1;
    width: 100%;
  }

  .photo {
    grid-row: 3 / 6;
    grid-column: 2;
    width: 100%;
  }

  .button {
    justify-self: center;
    grid-row: 4;
    grid-column: 1;
  }
</style>
