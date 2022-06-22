<script lang="ts">
  import sanitizeHtml from 'sanitize-html';

  export let items: Page[];
  export let header: string;
</script>

<div class="resources">
  <h4>{header}</h4>
  {#each items as item}
    <li class="links">
      {@html sanitizeHtml(item.content.substring(3, item.content.length - 4))}
    </li>
    <br />
  {/each}
</div>

<style>
  .links {
    display: flex;
    justify-content: center;
    padding: 0 0 0 0;
  }

  .resources {
    flex: 1;
    padding: 1em;
  }

  h4 {
    padding: none;
    text-align: center;
  }
</style>
