<script lang="ts">
  let y: number;

  let sx: number;
  let sy: number;
  let lit: boolean;

  const random = () => Math.random() * 100;

  const moveStars = () => {
    sx = random();
    sy = random();
  };

  const delay = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  (async () => {
    while (true) {
      moveStars();
      lit = true;
      await delay(100);
      lit = false;
      await delay(random() * 10);
    }
  })();
</script>

<svelte:window bind:scrollY={y} />

<div
  class="wrapper"
  aria-hidden="true"
  style="transform: translateY({-0.1 * y}px)">
  <div class="stars" />
  <div class="stars" style:clip-path="circle(25px at {sx}% {sy}%)" class:lit />
</div>

<style>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    opacity: 0.3;
    background: url(/images/stars.png);
    background-size: 20em;
    z-index: -1;
    transition: filter 1000ms;
  }

  @keyframes light-star {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .lit {
    opacity: 0;
    animation: light-star 300ms ease-in-out normal forwards;
  }
</style>
