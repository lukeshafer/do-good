<!--
  TODO 
  - add file attachments options (POST-INITIAL RELEASE)
  - fix 500 internal server error and build email/send email on POST successful
  - update success message: "Your submission has been received! We'll get back to you as soon as we can!"
  -->
<script lang="ts">
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

  let responseMessage = '';
  let responseError: unknown;

  const submitForm = async () => {
    if (formValidation()) {
      console.log('request is : ', formData);
      try {
        // let name = formFields.name;
        // let pronouns = formFields.pronouns;
        // let email = formFields.email;
        // let phone = formFields.phone;
        // let reason = formFields.reason;
        // let msg = formFields.message;
        // console.log(name, pronouns, email, phone, reason, msg);

        const responseBody = {
          fj: 'jfds',
        };

        responseMessage = '👍';

        // const result = await fetch('api/contact', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     name,
        //     pronouns,
        //     email,
        //     phone,
        //     reason,
        //     msg,
        //   }),
        // });

        // const data = await result.json();
        // console.log(data);
        // responseMessage = data;
        // console.log(responseMessage);
      } catch (err: unknown) {
        responseError = err;
      }
    }
  };
</script>

{#if !responseMessage && !responseError}
  <!-- FORMSPREE LINK: https://formspree.io/f/mgedqaob-->
  <!-- form action="/contact" method="POST" on:submit|preventDefault={handleSubmit}>-->
  <form
    action="/api/contact"
    method="POST"
    on:submit|preventDefault={submitForm}>
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
            name="{index.toString()}{field.name}"
            placeholder={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'long'}
          <textarea
            name="{index.toString()}{field.name}"
            placeholder={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'phone'}
          <input
            type="tel"
            name="{index.toString()}{field.name}"
            placeholder={field.name}
            bind:value={formData[index]} />
        {:else if field.type === 'email'}
          <input
            type="email"
            name="{index.toString()}{field.name}"
            placeholder={field.name}
            bind:value={formData[index]} />
        {/if}
      {:else if field.__component === 'form-fields.drop-down'}
        <!-- DROP DOWN LOGIC GOES HERE! -->
        <select
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
      <button class="btn" type="submit">Submit</button>
    </span>
  </form>
{:else if responseMessage}
  <p>Success</p>
{:else if responseError}
  <p>Error - Something went wrong on our end but you tried to enter:</p>
  <br />
  {#each fields as field, index}
    <p>{field.name}: {formData[index]}</p>
  {/each}
{/if}

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
    font-family: 'Fira Code';
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
    font-family: 'Fira Code';
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
    font-family: 'Fira Code';
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
  }

  .formField {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .btn {
    font-weight: lighter;
    cursor: pointer;
    font-family: 'Fira Code';
  }
</style>
