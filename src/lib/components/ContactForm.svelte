<!--
  TODO 
  - make it prettier
  - add file attachments options (POST-INITIAL RELEASE)
  -->
<script>
  import { element } from 'svelte/internal';

  let pronouns = [
    { id: 1, text: '-Select-' },
    { id: 2, text: 'He/Him/His' },
    { id: 3, text: 'She/Her/Hers' },
    { id: 4, text: 'They/Them/Theirs' },
    { id: 5, text: 'Ze/Hir/Hirs' },
    { id: 6, text: 'Other - Please Specify' },
  ];
  let pronounSelected = pronouns[0].text;

  let formFields = {
    name: '',
    pronouns: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  };
  let errors = {
    name: '',
    pronouns: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  };
  let valid = false;

  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  let phoneTemplate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const handleSubmit = () => {
    valid = true;

    //validate name
    if (formFields.name.trim().length < 1) {
      valid = false;
      errors.name = 'Name is required!';
    } else {
      errors.name = '';
    }

    //validate pronouns
    if (formFields.pronouns == '-Select-') {
      formFields.pronouns = '';
    }

    //validate email
    if (!regex.test(formFields.email)) {
      valid = false;
      errors.email = 'Email is required - must be a valid email!';
    } else {
      errors.email = '';
    }

    //validate telephone
    if (
      formFields.phone.trim().length > 0 &&
      !formFields.phone.match(phoneTemplate)
    ) {
      valid = false;
      errors.phone =
        'If including telephone, must contain 10 numbers! Example: ###-###-####';
    } else {
      errors.phone = '';
    }

    //validate reason
    if (formFields.reason.trim().length < 1) {
      valid = false;
      errors.reason = 'Reason is required!';
    } else if (formFields.reason.trim().length > 25) {
      valid = false;
      errors.reason = "Reason can't be longer than 25 characters!";
    } else {
      errors.reason = '';
    }

    //validate message
    if (formFields.message.trim().length == 0) {
      valid = false;
      errors.message = 'Message is required!';
    } else {
      errors.message = '';
    }

    if (valid) {
      console.log('valid', formFields);
    }
  };
</script>

<form
  action="https://formspree.io/f/mgedqaob"
  method="POST"
  on:submit|preventDefault={handleSubmit}>
  <span for="RequiredFieldsMessage" class="error info"
    >Required fields are marked by an asterisk. (*)
  </span>

  <!--Name-->
  <span for="name" class="formField">
    <label for="name" class="required-field"> Name: </label>
    <label for="name-error" class="error">{errors.name}</label>
  </span>
  <input
    type="text"
    name="name"
    placeholder="Name"
    bind:value={formFields.name} />

  <!--Pronouns-->
  <label for="pronouns"> Pronouns: </label>
  <select
    placeholder={pronounSelected}
    bind:value={pronounSelected}
    on:change={() => (formFields.pronouns = pronounSelected)}>
    {#each pronouns as pronoun}
      <option value={pronoun.text}>{pronoun.text}</option>
    {/each}
  </select>
  {#if pronounSelected == 'Other - Please Specify'}
    {(formFields.pronouns = '')}
    <input
      name="pronouns"
      placeholder="Enter your pronouns"
      bind:value={formFields.pronouns} />
  {/if}

  <!--Email-->
  <span for="email" class="formField">
    <label for="email" class="required-field"> Email: </label>
    <label for="email-error" class="error">{errors.email}</label>
  </span>
  <input
    type="email"
    name="email"
    placeholder="Email"
    bind:value={formFields.email} />

  <!--Phone-->
  <span for="phone" class="formField">
    <label for="phone"> Telephone: </label>
    <label for="phone-error" class="error">{errors.phone}</label>
  </span>
  <input
    type="text"
    name="phone"
    placeholder="Telephone"
    bind:value={formFields.phone} />

  <!--Reason for Contacting Us-->
  <span for="reason" class="formField">
    <label for="reason" class="required-field"> Reason: </label>
    <label for="reason-error" class="error">{errors.reason}</label>
  </span>
  <input
    type="text"
    name="reason"
    placeholder="Reason"
    bind:value={formFields.reason} />

  <!--Message-->
  <span for="message" class="formField">
    <label for="message" class="required-field"> Message: </label>
    <label for="message-error" class="error">{errors.message}</label>
  </span>
  <textarea
    name="message"
    placeholder="Message"
    bind:value={formFields.message} />

  <!--Submit-->
  <span class="btn-wrapper">
    <button class="btn" type="submit">Submit</button>
  </span>
</form>

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
  }

  .btn {
    font-weight: lighter;
    cursor: pointer;
    font-family: 'Fira Code';
  }
</style>
