<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import NavItem from '$lib/components/Nav/NavItem.svelte';
  import 'normalize.css';
  import '../colors.css';
  import '../global.css';
</script>

<header>
  <logo width="10em" />
  <navbar>
    <navitem href="/">Home</navitem>
    <navitem href="/">What is DGC?</navitem>
    <navitem href="/">How can I help?</navitem>
    <navitem href="/">About Us</navitem>
    <navitem href="/">Join</navitem>
    <navitem href="/">FAQ</navitem>
  </navbar>
</header>

<slot />

<style>
</style>
