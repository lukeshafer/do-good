<script lang="ts">
  import Box from '$lib/components/Box.svelte';
</script>

<main>
  <Box background="var(--accent-color)">
    <div>
      <h2>Rally for Mr. Talley!</h2>
      <p>
        We're fundraising for Mr. Brandon Talley, a single father who has been
        on the kidney transplant list for so long that he now also needs a
        pancreas. He goes to dialysis three times a week and is now no longer
        able to work, and he's struggling to get by. We're hoping to help Mr.
        Talley however we can. <strong>
          One meaningful thing we would like to accomplish is allowing him to
          spend his time with his kids without worrying about how he's going to
          provide for them.
        </strong>
      </p>
      <p>
        June is a great time to help Mr. Talley, who has dedicated his whole
        life to helping and mentoring kids on the South Side of Columbus - it's
        home to both Father's Day and Juneteenth. <strong>
          Please consider your privilege when thinking about donating or helping
          us fundraise.
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
    </div>
  </Box>
</main>

<style>
  main {
    max-width: 40em;
  }

  div {
    padding: 1em;
  }
</style>
