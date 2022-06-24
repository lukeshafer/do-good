<script lang="ts">
  import sanitizeHtml from 'sanitize-html';

  export let items: InternalLink[];
  export let header: string;
</script>

<div class="resources">
  <h4>{header}</h4>
  {#each items as item}
    <li class="links">
      {item.title} - will be linked soon
    </li>
    <br />
  {/each}
</div>

<style>
  .links {
    display: flex;
    justify-content: center;
    padding: 0 0 0 0;
    font-family: 'Fira Code';
  }

  .resources {
    flex: 1;
    padding: 1em;
  }

  h4 {
    padding: none;
    text-align: center;
  }

  a {
    font-family: 'Fira Code';
  }
</style>
