<nav>
  <ul>
    <!-- A bunch of NavItems will typically go in this slot -->
    <slot />
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    background: var(--primary-color);
    margin-left: -10em;
    height: fit-content;
  }

  ul {
    margin: 0 5em 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 2em;

    /* removes the default styling of lists */
    list-style-type: none;
    padding-inline-start: 0;
    padding: 0;
  }
</style>
