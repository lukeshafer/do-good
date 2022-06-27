<script lang="ts">
  export let width: string = '150',
    height: string = width;
</script>

<a href="/" aria-label="Home Page">
  <img
    class="logo"
    src="/images/do-good-logo.png"
    alt="A logo of two hands holding the moon, with the words 'Do Good' above them"
    style:width
    style:height />
</a>

<style>
  a {
    z-index: 1;
    transition: transform 100ms ease-in-out, filter 100ms ease-in-out;
  }
  img {
    border-radius: 100%;
    filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.5));
  }

  a:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
</style>
