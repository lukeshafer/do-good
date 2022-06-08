<script>
  let reasons = [
    { id: 1, text: '-Select-'},
    { id: 2, text: 'Partnership Opportunity with My Company'},
    { id: 3, text: 'Question Not Answered by the FAQ'},
    { id: 4, text: 'Other'}
  ];
  let reasonSelected;
  let reasonAnswer='';
  let name;
  let pronouns = [
    { id: 1, text: '-Select-'},
    { id: 2, text: 'He/Him/His' },
    { id: 3, text: 'She/Her/Hers'},
    { id: 4, text: 'They/Them/Theirs'},
    { id: 5, text: 'Ze/Hir/Hirs'},
    { id: 6, text: 'Other - Please Specify'}
  ];

  let pronounSelected;
  let pronounAnswer='';
  let email;
  let phone;
  let message;
  

  const handleSubmit = () => {
    console.log(name, pronounSelected, email, phone, reasonSelected, message);
  };
</script>

<form action="https://formspree.io/f/mgedqaob"
  method="POST" on:submit|preventDefault={handleSubmit}>
  
  <!--Name-->
  <label class="required-field">
    Name:
  </label>
  <input type="text" name="name" placeholder="Name" bind:value={name}>
  <!--Pronouns-->
  <label>
    Pronouns:
  </label>
  <select bind:value={pronounSelected} on:change="{() => pronounAnswer = ''}">
    {#each pronouns as pronoun}
      <option value={pronoun.text}>{pronoun.text}</option>
    {/each}
  </select>
  <!--Email-->
  <label class="required-field">
    Email:
    <input type="email" name="email" placeholder="Email" bind:value={email}>
  </label>
  <!--Phone-->
  <label>
    Telephone:
    <input type="text" name="phone" placeholder="Phone" bind:value={phone}>
  </label>
  <!--Reason for Contacting Us-->
  <label class="required-field">
    Reason:
  </label>
  <select placeholder="-Select-" on:change="{() => reasonAnswer = ''}">
    {#each reasons as reason}
      <option value={reason.text}>{reason.text}
      </option>
    {/each}
  </select>
  <!--Message-->
  <label class="required-field">
    Message:
    <textarea name="message" placeholder="Message" bind:value={message}></textarea>
  </label>
  
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