<script lang="ts">
  export let background: string;

  let flipped = true;
</script>

<article on:click={() => (flipped = !flipped)} class:flipped>
  <div class="front" style:background-color={background}>
    <slot />
  </div>

  <div class="back">
    <slot name="back"
      ><p>
        <span
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          fugiat perspiciatis ad sapiente? Numquam impedit laudantium nobis
          sapiente ab vel. Pariatur totam harum fugit quae, doloribus iusto
          dicta magnam sapiente.</span
        ><span
          >Sint ipsum dolores assumenda possimus hic neque id voluptate, cumque,
          facilis corporis voluptatibus cupiditate magnam dolorem nisi,
          dignissimos unde laboriosam asperiores architecto delectus provident
          eius eligendi. Aspernatur assumenda ducimus quia?</span
        ><span
          >Minus omnis non accusamus fugiat dolorem porro veniam est delectus
          dolore eligendi harum aliquid dignissimos nihil, eos repellendus
          maxime veritatis eius fugit totam, tempore consectetur, ut deleniti?
          Aperiam, unde minus.</span
        ><span
          >Soluta illo iste dignissimos nam in at necessitatibus eum? At quasi
          molestias, nobis laborum enim praesentium obcaecati velit, adipisci
          nemo facere magnam veritatis ratione perferendis nam vitae
          reprehenderit porro vero!</span
        ><span
          >Maxime error, soluta quos delectus architecto unde reiciendis tenetur
          facere eos perferendis et sunt sit aliquid odit quibusdam corporis qui
          ut minima. Odio quisquam, laudantium dicta natus ratione explicabo
          reiciendis?</span
        ><span
          >Qui, facere? Beatae quam distinctio, quaerat quia, voluptate
          sapiente, fugit accusantium est placeat nesciunt soluta enim eius. Est
          adipisci eaque illo tempora suscipit voluptatibus deserunt debitis cum
          sunt laborum. Nemo.</span>
      </p>
    </slot>
  </div>
</article>

<style>
  article {
    /* Adding comment to force a merge */
    position: relative;
    transition: transform 200ms;
  }

  article:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  article.flipped > .front {
    transform: rotateY(180deg);
    height: 20em;
  }

  article.flipped > .back {
    transform: rotateY(360deg);
  }

  article.flipped:hover {
    transform: scale(1.1);
  }

  div {
    transition: transform 700ms, height 700ms 700ms;
    padding: 0.2em;
    text-align: center;
    border-radius: 1.5em;
    border: 2px solid var(--border-color);
    outline: 0.1px solid rgba(var(--background-values), 0.5);
    height: 10em;
    backface-visibility: hidden;
    box-shadow: 0.5em 0.4em var(--box-shadow-color);
  }

  .front {
  }

  div:hover {
    /* transform: rotateY(180deg); */
  }

  div.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    height: 20em;
    transform: rotateY(180deg);
  }
</style>
