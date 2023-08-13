<script lang="ts">

  import { NewModal, showElementInfo, NewModalBody, NewModalFooter,  NewModalHeader} from  'naon-sveltestrap';
  let dialog;
  
  const onClick = () => { 
    console.log('click');
  }
  
  </script>
  
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newModal">
    Launch demo modal
  </button>
  
  <NewModal  id="newModal">
    <NewModalHeader>
      Title#1
    </NewModalHeader>
     <NewModalBody> 
      <h2>Hello</h2>
    </NewModalBody>
    <NewModalFooter>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button on:click={onClick} type="button"  data-bs-dismiss="modal"  class="btn btn-primary">Save changes</button>
    </NewModalFooter>
  </NewModal>