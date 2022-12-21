<div>
  <slot><!-- optional fallback --></slot>
</div>

<style lang="postcss">
  div {
    background-color: #e9e7da;
    background: url('/images/paper-bg.png');
    background-size: 5em 2em;
    box-shadow: 0.1em 0.1em 1em #00000055;
    grid-column: 1;
    grid-row: 3 / 7;
    padding: 1em;
    height: auto;
    width: auto;
    font-size: 1.5em;
    margin-left: 2.5em;
    margin-bottom: 0.5em;
    justify-self: center;
    border-radius: 0em 1.4em 1.5em 0em;
    position: relative;

    & > :global(*) {
      margin: 0;
      font: 500 1rem 'Droid Serif';
      text-align: left;
      letter-spacing: 0.07em;
      color: #342e7a;
      padding: 1.15em 0 0 0;
      background: url('/images/paper.png');
      background-size: 100% 2.35em;
      /* border-top: 1px solid #cecbc2; */
      /* text-decoration: underline #cecbc2 solid 1px; */
      position: relative;
    }

    & > :global(*:last-child) {
      padding-bottom: 1.15em;
    }
  }

  div::before {
    content: ' ';
    position: absolute;
    background-color: transparent;
    background-image: url('/images/paper-edge.png');
    background-size: 100%;
    height: 100%;
    width: 2.5em;
    top: 0;
    left: -2.5em;
    margin: 0;
    padding: 0;
    /* match parent shadow but as a drop shadow */
    filter: drop-shadow(0 0.1em 1em -1em #00000055);
  }
</style>
