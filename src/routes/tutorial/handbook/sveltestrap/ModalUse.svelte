<script lang="ts">
  // 잘 동작하지 않음 
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from  'naon-sveltestrap';

  let open = false;
  const toggle = () => (open = !open);
</script>

<div>
  <Button static color="danger" data-toggle="modal"  data-target="#myModal"  on:click={toggle}>Open Modal</Button>
  <Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={toggle}>Do Something</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>