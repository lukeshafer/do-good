<!--
  TODO 
  - make it prettier
  -->

<script>
  let reasons = [
    { id: 1, text: '-Select-'},
    { id: 2, text: 'Partnership Opportunity with My Company'},
    { id: 3, text: 'Question Not Answered by the FAQ'},
    { id: 4, text: 'Other'}
  ];
  let reasonAnswer='';
  let pronouns = [
    { id: 1, text: '-Select-'},
    { id: 2, text: 'He/Him/His' },
    { id: 3, text: 'She/Her/Hers'},
    { id: 4, text: 'They/Them/Theirs'},
    { id: 5, text: 'Ze/Hir/Hirs'},
    { id: 6, text: 'Other - Please Specify'}
  ];
  let pronounAnswer='';
 
  let name;
  let pronounSelected;
  let email;
  let phone='';
  let reasonSelected;
  let message;
  
  let formFields = {name: '', pronouns: '', email: '', phone: '', reason: '', message: ''};
  let errors = {name: '', pronouns: '', email: '', phone: '', reason: '', message: ''};
  let valid = false;

  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let phoneTemplate = new RegExp('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im');

  function checkForSelection(selection) {
    if(selection === '-Select-') {
      return '';
    }
    else {
      return selection;
    }
  }

  const handleSubmit = () => {
    valid = true;

    //validate name
    if(formFields.name.trim().length < 1) {
      valid = false;
      errors.name = 'Name is required!';
    } else {
      errors.name = '';
    }

    //validate pronouns
    if(formFields.pronouns == '-Select-') {
      formFields.pronouns = '';
    }

    //validate email
    if(!regex.test(formFields.email)) {
      valid = false;
      errors.email = 'Email is required and must be a valid email!';
    } else {
      errors.email = '';
    }

    //validate telephone
    if(formFields.phone.trim().length > 0 && !formFields.phone.match(phoneTemplate)) {
      valid = false;
      errors.phone = 'Telephone (if provided) must contain at least 10 digits (###-###-####)!';
    } else {
      errors.phone = '';
    }

    //validate reason
    formFields.reason = reasonSelected;
    if(formFields.reason == '-Select-') {
      valid = false;
      errors.reason = 'Reason is required!';
    } else {
      errors.reason = '';
    }

    //validate message
    if(formFields.message.trim().length == 0) {
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

<form action="https://formspree.io/f/mgedqaob"
  method="POST" on:submit|preventDefault={handleSubmit}>
  
  <!--Name-->
  <label class="required-field">
    Name:
  </label>
  <div class="error">{ errors.name }</div>
  <input type="text" name="name" bind:value={formFields.name}>
  
  <!--Pronouns-->
  <label>
    Pronouns:
  </label>
  <select bind:value={pronounSelected} on:change="{() => formFields.pronoun = ''}">
    {#each pronouns as pronoun}
      <option value={pronoun.text}>{pronoun.text}</option>
    {/each}
  </select>
  <!--Email-->
  <label class="required-field">
    Email:
  </label>
  <div class="error">{ errors.email }</div>
  <input type="email" name="email" bind:value={formFields.email}>
  
  <!--Phone-->
  <label>
    Telephone:
  </label>
  <div class="error">{ errors.phone }</div>
  <input type="text" name="phone" bind:value={formFields.phone}>
  
  <!--Reason for Contacting Us-->
  <label class="required-field">
    Reason:
  </label>
  <div class="error">{ errors.reason }</div>
  <select bind:value={reasonSelected} on:change="{() => formFields.reason = ''}">
    {#each reasons as reason}
      <option value={reason.text}>{reason.text}
      </option>
    {/each}
  </select>
  <!--Message-->
  <label class="required-field">
    Message:
  </label>
  <div class="error">{ errors.message }</div>
  <textarea name="message" bind:value={formFields.message}></textarea>
  
  <!--Submit-->
  <span class="btn-wrapper">
    <button class="btn" type="submit">Submit</button>
  </span>
</form>

<style>
  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1em 4em;
  }

  form {
    max-width: 25em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5em;
    gap: 0.7em;
  }

  label {
    font-family: "Fira Code";
  }

  input, textarea {
    border-radius: 0;
    width: 80%;
    padding: 0.5em 1em;
    border: none;
  }

  select {
    border-radius: 0;
    width: 90%;
    padding: 0.5em 1em;
    border: none;
  }

  .error {
    font-weight: bold;
    color: red;
    font-size: small;
    font-style: italic;
  }

  .required-field::before {
    content: "*";
    color: red;
    vertical-align: super
  }

  .btn-wrapper {
    height: 0;
  }

  .btn {
    font-weight: lighter;
    cursor: pointer;
  }
</style>