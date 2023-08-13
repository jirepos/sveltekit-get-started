<script lang="ts">
  // import {
  //   ButtonDropdown,
  //   DropdownItem,
  //   DropdownMenu,
  //   DropdownToggle
  // } from 'sveltestrap';
  import {
    Button,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'naon-sveltestrap'

  let isOpen = false;

</script>

<ButtonDropdown>
  <DropdownToggle color="primary" caret>Click Me</DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem>Some Action</DropdownItem>
    <DropdownItem disabled>Action (disabled)</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Foo Action</DropdownItem>
    <DropdownItem>Bar Action</DropdownItem>
    <DropdownItem>Quo Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>


<ButtonDropdown>
  <Button
    color="primary"
    on:click={() => alert("Cool, I didn't trigger the dropdown")}
  >
    Click Me
  </Button>
  <DropdownToggle split color="primary" />
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem>Some Action</DropdownItem>
    <DropdownItem disabled>Action (disabled)</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Foo Action</DropdownItem>
    <DropdownItem>Bar Action</DropdownItem>
    <DropdownItem>Quo Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>


<ButtonDropdown {isOpen}>
  <DropdownToggle color="primary" caret on:click={() => (isOpen = !isOpen)}>
    I'm a glutton for punishment
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem>Some Action</DropdownItem>
    <DropdownItem disabled>Action (disabled)</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Foo Action</DropdownItem>
    <DropdownItem>Bar Action</DropdownItem>
    <DropdownItem>Quo Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

