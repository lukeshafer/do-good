<!--
  TODO 
  - add file attachments options (POST-INITIAL RELEASE)
  - fix 500 internal server error and build email/send email on POST successful
  - update success message: "Your submission has been received! We'll get back to you as soon as we can!"
  -->
<script lang="ts">
  import PaperSheet from './DesignBlocks/PaperSheet.svelte';
  import Button from './DesignBlocks/Button.svelte';
  /*
  import sgMail from '@sendgrid/mail';
  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
  console.log(import.meta.env.SENDGRID_API_KEY);
  */
  export let fields: ContactField[];

  // two arrays of blank strings of the same length as fields
  const formData = fields.map(() => '');
  const validationErrorList = fields.map(() => '');

  let dropDownIndex = 0;

  const selectedDropdowns = fields
    .filter((field) => field.__component === 'form-fields.drop-down')
    .map(() => '-Select-');

  let valid: boolean;

  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  let phoneTemplate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  /*
  const sendEmail = () => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'dogoodcollectiveorg@gmail.com', // Change to your recipient
      from: `${formData[2]}`, // Change to your verified sender
      subject: `${formData[4]}`,
      text: 'and easy to do anywhere, even with Node.js',
      html: '<div>`${formData[5]}`<br /><br />`${formData[0]}`<br />`${formData[1]}`<br />`${formData[3]`</div>',
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  };*/

  const formValidation = () => {
    valid = true;

    for (let index in fields) {
      const field = fields[index];
      const data = formData[index];

      if (field.isRequired && data.trim().length < 1) {
        valid = false;
        validationErrorList[index] = `${field.name} is required!`;
      } else {
        validationErrorList[index] = '';
      }

      switch (field.__component) {
        case 'form-fields.text':
          switch (field.type) {
            case 'email':
              //validate email
              if (!regex.test(data)) {
                valid = false;
                validationErrorList[
                  index
                ] = `${field.name} is required - must be a valid email address!`;
              } else {
                validationErrorList[index] = '';
              }
              break;
            case 'phone':
              //validate telephone
              if (data.trim().length > 0 && !data.match(phoneTemplate)) {
                valid = false;
                validationErrorList[
                  index
                ] = `${field.name} must contain 10 numbers! Example: ###-###-####`;
              } else {
                validationErrorList[index] = '';
              }
          }
          break;
        case 'form-fields.text':
          //validate dropdown
          if (data == '-Select-') {
            formData[index] = '-Select-';
          }
      }
    }

    if (!valid) {
      return false;
    } else {
      return true;
    }
  };

  /*
  let responseMessage = '';
  let responseError: unknown;

  function sendIt() {
    fetch(import.meta.env.VITE_API_PATH + '/api/email', {
      method: 'GET',
    });
  }
*/
  function submitForm() {
    if (formValidation()) {
      console.log('request is : ', formData);

      /*
      try {
        // console.log(name, pronouns, email, phone, reason, msg);

        const responseBody = {
          name: formData[0],
          pronouns: formData[1],
          email: formData[2],
          phone: formData[3],
          reason: formData[4],
          msg: formData[5],
        };
        const urlString = import.meta.env.VITE_API_PATH + 'api/email';
        
        const result = await fetch(urlString, {
          method: 'POST',
          body: JSON.stringify(responseBody),
        });
        //sendIt();

        responseMessage = 'Email sent successfully.';

        // const data = await result.json();
        // console.log(data);
        // responseMessage = data;
        // console.log(responseMessage);
      } catch (err: unknown) {
        responseError = err;
        console.log(responseError);
      }*/
    }
  }
</script>

<title>Contact Us</title>

<!--{#if !responseMessage && !responseError}-->
<!-- FORMSPREE LINK: https://formspree.io/f/xnqwygjw-->
<!-- form action="/contact" method="POST" on:submit|preventDefault={handleSubmit}>
on:submit|preventDefault={formValidation}-->
<PaperSheet>
  <form action="https://formspree.io/f/xnqwygjw" method="POST">
    <span
      for="Required fields are marked by an asterisk. (*)"
      class="error info"
      >Required fields are marked by an asterisk. (*)
    </span>

    {#each fields as field, index}
      <span class="formField">
        <label
          for="{index.toString()}{field.name}"
          class:required-field={field.isRequired}>
          {field.name}:
        </label>
        <label for="{index.toString()}{field.name}" class="error"
          >{validationErrorList[index]}</label>
      </span>
      {#if field.__component === 'form-fields.text'}
        <!-- Text fields -->

        <!-- Render field based on its type -->
        {#if field.type === 'short'}
          <input
            type="text"
            name={field.name}
            placeholder={field.name === 'Reason - Please specify when possible'
              ? 'Reason'
              : field.name}
            id={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'long'}
          <textarea
            name={field.name}
            placeholder={field.name}
            id={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'phone'}
          <input
            type="tel"
            name={field.name}
            placeholder={field.name}
            id={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'email'}
          <input
            type="email"
            name={field.name}
            placeholder={field.name}
            id={field.name}
            bind:value={formData[index]} />
        {/if}
      {:else if field.__component === 'form-fields.drop-down'}
        <!-- DROP DOWN LOGIC GOES HERE! -->
        <select
          name="Pronouns"
          id="pronouns"
          bind:value={selectedDropdowns[dropDownIndex]}
          on:change={() =>
            (formData[index] = selectedDropdowns[dropDownIndex])}>
          <option value="-Select-" selected>{'-Select-'}</option>
          {#each field.entries as entry}
            <option value={entry.value}>{entry.value}</option>
          {/each}
          {#if field.allowOther}
            <option value="">{'Other - Please Specify'}</option>
          {/if}
        </select>
        {#if selectedDropdowns[dropDownIndex] === ''}
          <input
            name="pronouns"
            placeholder="Enter your pronouns"
            id="pronouns"
            bind:value={formData[index]} />
        {/if}

        <!--
        <script lang="ts">
          dropDownIndex++;
        </script>
        -->
      {/if}
    {/each}

    <!--Submit-->
    <span class="btn-wrapper">
      <!-- <button class="btn" type="submit">Submit</button> -->
      <Button type="submit">Submit</Button>
    </span>
  </form>
</PaperSheet>

<!--
{:else if responseMessage}
  <p>Success</p>
{:else if responseError}
  <p>Error - Something went wrong on our end but you tried to enter:</p>
  <br />
  {#each fields as field, index}
    <p>{field.name}: {formData[index]}</p>
  {/each}
{/if}
-->
<style>
  form {
    /*max-width: 25em;*/
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    font-size: 1.5em;
    gap: 0.25em;
  }

  label {
    display: flex;
    justify-content: flex-start;
    font-family: var(--body-font);
    font-weight: bold;
    font-size: smaller;
  }

  input,
  textarea,
  select {
    display: flex;
    align-items: center;
    border-radius: 0;
    padding: 0.5em 1em;
    border: none;
    font-family: var(--body-font);
    background-color: rgb(255, 255, 255, 0.7);
  }
  textarea {
    resize: none;
  }

  .error {
    display: flex;
    align-items: center;
    color: red;
    font-style: italic;
    font-family: var(--body-font);
    font-size: 55%;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    font-size: 55%;
  }

  .required-field::before {
    content: '*';
    color: red;
    vertical-align: super;
    font-size: 60%;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    font-size: 0.6em;
  }

  .formField {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .btn {
    font-weight: lighter;
    cursor: pointer;
    font-family: var(--body-font);
  }
</style>
