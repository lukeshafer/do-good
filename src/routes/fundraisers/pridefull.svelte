<script lang="ts">
  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<main>
  <h1 class="fundraiser-heading">PrideFull</h1>

  <span
    class="rainbow"
    aria-hidden="true"
    style:transform="translateY({0.2 * y}px)" />

  <div class="block">
    <h2>What is PrideFull?</h2>
    <p>
      PrideFull is our current fundraiser that we are hosting at Do Good
      Collective! Our priority focuses on queer, trans, and/or intersex BIPOC!
    </p>
  </div>

  <div class="block">
    <h2>Our Main Goal:</h2>
    <p>
      Our goal is to raise $2,000 through mutual aid funding in order to help 10
      people get $200 in groceries!
    </p>
  </div>

  <figure>
    <p class="quote">
      <u
        >Mutual aid fundraising is the act of raising money through community!</u>
    </p>
    <blockquote
      cite="https://ssw.uga.edu/news/article/what-is-mutual-aid-by-joel-izlar/">
      <p>
        "Mutual aid is when everyday people get together to meet each other's
        needs, with the shared understanding that the systems we live in are not
        meeting our needs and that we can meet them together, right now, without
        having to pressure power structures to do the right thing."
      </p>
    </blockquote>
    <figcaption>
      —Joel Izlar, <cite
        ><a
          href="https://ssw.uga.edu/news/article/what-is-mutual-aid-by-joel-izlar/"
          >https://ssw.uga.edu/news/article/what-is-mutual-aid-by-joel-izlar/</a
        ></cite>
    </figcaption>
  </figure>

  <div class="block">
    <span class="rainbow-eye" aria-hidden="true" />
    <span class="rainbow-people" aria-hidden="true" />
    <h2>How can you help?</h2>
    <ul>
      <li>
        <p>By donating directly to the fundraiser</p>
      </li>
      <li>
        <p>
          Helping spread the word by sharing on social media, with friends and
          family or through businesses
        </p>
      </li>
      <li>
        <p>Donating portions of sales if you are a business</p>
      </li>
      <li>
        <p>Asking others to match your donation!</p>
      </li>
    </ul>
  </div>
</main>

<style lang="postcss">
  .rainbow {
    background-image: url('https://res.cloudinary.com/do-good-collective/image/upload/v1656003087/pridefull/rainbow_y6upoh.png');
    background-repeat: no-repeat;
    background-size: 50em;
    background-blend-mode: darken;
    position: absolute;
    width: 150%;
    height: 60em;
    z-index: -1;
    top: 0;
    left: -50%;
    transform: rotate(10deg);
    opacity: 0.57;
  }

  main {
    position: relative;
    flex-direction: column;
    text-align: left;
  }

  h2 {
    font-size: 2em;
    text-shadow: 0 0 0.9em #000;
    padding: 0 1em;
  }

  .block {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 10em;
    width: clamp(10em, 70vw, 30em);

    & > ul {
      padding-left: 2em;

      & p {
        color: black;
      }

      & li::marker:nth-child(3n-2) {
        color: black;
      }

      & li::marker:nth-child(3n-1) {
        color: #502e0b;
      }

      & li::marker:nth-child(3n) {
        color: #865b1b;
      }
    }

    & > :where(p, ul) {
      font-size: 1.5em;
      font-style: italic;
      background-image: url('https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_469/v1656003087/pridefull/textbox_wss4yo.png');
      color: black;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 1em;
    }

    &:nth-of-type(even) {
      margin-left: auto;
      padding-right: 1em;

      & h2 {
        text-align: right;
      }
    }

    &:nth-of-type(odd) {
      margin-right: auto;
      padding-left: 1em;
    }
  }

  .quote {
    margin-bottom: 0;
    font-style: italic;
  }

  blockquote {
    margin-top: 0;
    margin-left: 2em;
    margin-right: 2em;
    text-align: left;
  }

  figcaption,
  figcaption * {
    font-weight: normal;
    font-size: 0.9em;
    font-style: italic;
  }

  .rainbow-eye {
    background: url(https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_251/v1656003089/pridefull/rainbow-eye_myj0tv.png)
      no-repeat center;
    background-size: 6em;
    width: 15em;
    height: 8em;
    display: block;
    position: absolute;
    top: -6em;
    left: 0;
    opacity: 0.75;
    z-index: -1;
  }

  .rainbow-people {
    background: url(https://res.cloudinary.com/do-good-collective/image/upload/c_scale,w_364/v1656003088/pridefull/rainbowpeople_g7qm9c.png)
      no-repeat center;
    background-size: 15em;
    width: 15em;
    height: 10em;
    display: block;
    position: absolute;
    bottom: -4em;
    right: -5em;
    opacity: 0.75;
    z-index: -1;
  }

  figure {
    color: var(--primary-color);
    text-align: center;
    font-size: 1.3em;
    margin: 1em;
    margin-bottom: 2em;
    padding: 1em;
    /* background is gradient with #00000088 in the center and transparent on all edges */
    background: radial-gradient(
      closest-side,
      rgba(0, 0, 0, 0.88) 0%,
      rgba(0, 0, 0, 0.88) 50%,
      rgba(0, 0, 0, 0) 100%
    );

    & > p {
      font-weight: bold;
    }

    & a {
      color: var(--secondary-accent-color);

      &:visited {
        color: var(--box2-color);
      }
    }
  }
</style>
