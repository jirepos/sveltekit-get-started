<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from  'naon-sveltestrap';

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<Navbar color="light" light>
  <NavbarBrand href="/" class="me-auto">sveltestrap</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="#components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>