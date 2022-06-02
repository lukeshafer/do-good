<script lang="ts">
  import { onMount } from 'svelte';

  let activateMain = false;
  onMount(() => {
    activateMain = true;
  });
</script>

<svelte:head>
  <title>Do Good Collective</title>
</svelte:head>

<!-- FIXME: Redo this whole page! Make components and stuff -->

<main class:activate={activateMain}>
  <!-- TODO Refactor into Logo component -->
  <header>
    <img
      class="logo"
      src="images/do-good-logo.png"
      alt="A logo of two hands holding the moon, with the words 'Do Good' above them"
      width="150" />
    <h1>Do Good Collective</h1>
  </header>

  <h2><strong>Rally for Mr. Talley!</strong></h2>

  <p>
    We're fundraising for Mr. Brandon Talley, a single father who has been on
    the kidney transplant list for so long that he now also needs a pancreas. He
    goes to dialysis three times a week and is now no longer able to work, and
    he's struggling to get by. We're hoping to help Mr. Talley however we can. <strong>
      One meaningful thing we would like to accomplish is allowing him to spend
      his time with his kids without worrying about how he's going to provide
      for them.
    </strong>
  </p>

  <p>
    June is a great time to help Mr. Talley, who has dedicated his whole life to
    helping and mentoring kids on the South Side of Columbus - it's home to both
    Father's Day and Juneteenth. <strong>
      Please consider your privilege when thinking about donating or helping us
      fundraise.
    </strong>
  </p>

  <p>You can donate to support Mr. Talley at the Chuffed campaign below!</p>

  <iframe
    title="Rally for Mr. Tally, Chuffed.org campaign"
    width="100%"
    height="380"
    src="https://chuffed.org/iframe/91339/25aae1"
    frameborder="0"
    allowfullscreen
    style="max-width:310px;border:0px solid #fff;margin:0 auto;" />

  <p class="btn-container">
    <a class="btn" href="https://chuffed.org/project/rally-for-mr-talley"
      >Donate Now!</a>
  </p>
</main>

<style>
  img.logo {
    border-radius: 100%;
    width: 10em;
  }
  main {
    visibility: hidden;
  }
  main.activate {
    visibility: visible;
  }

  .btn-container {
    height: 8em;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  .btn {
    background-color: var(--accent-color);
    text-decoration: none;
    width: fit-content;
    color: var(--dark);
    padding: 0.5em 0.8em;
    border-radius: 1em;
    box-shadow: 0.04em 0.03em 0.1em var(--dark);
    white-space: nowrap;
    margin-left: 0;
    display: absolute;
  }

  .btn:hover {
    font-size: 2.2em;
    filter: brightness(120%);
  }

  @media (prefers-reduced-motion: reduce) {
    @keyframes slide-in {
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    @keyframes slide-in {
      0% {
        transform: translateX(-100vw);
      }
      60% {
        transform: translateX(15vh);
      }
      70% {
        transform: translateX(14vh);
      }
      100% {
        transform: translateX(0vh);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    main.activate,
    .btn {
      animation: none;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    .btn {
      transition: font-size 200ms cubic-bezier(0.57, -1, 0.41, 2);
    }
    main.activate {
      animation: slide-in 500ms ease-in-out;
    }
  }
</style>
