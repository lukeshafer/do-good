<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import NavItem from '$lib/components/Nav/NavItem.svelte';
  import 'normalize.css';
  import '../global.css';
</script>

<Header>
  <Logo />
  <Navbar>
    <NavItem href="/">Home</NavItem>
    <NavItem href="/">What is DGC?</NavItem>
    <NavItem href="/">How can I help?</NavItem>
    <NavItem href="/">About Us</NavItem>
    <NavItem href="/">Join</NavItem>
    <NavItem href="/">FAQ</NavItem>
  </Navbar>
</Header>

<slot />

<style>
</style>
