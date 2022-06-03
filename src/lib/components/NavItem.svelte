<script lang="ts">
  export let href: string;
</script>

<li>
  <a {href}><slot /></a>
</li>

<style>
  li {
    height: 2em;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
  }

  a {
    display: block;
    width: 100%;
    padding: 1em;
    font-size: 1.3em;
    font-weight: 400;
    text-decoration: none;
    color: var(--secondary-color);
  }

  li:hover {
    filter: brightness(1.1);
  }
</style>
