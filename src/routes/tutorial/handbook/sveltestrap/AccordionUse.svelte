<script lang="ts">
  // import Accordion  from '$lib/Accordion.svelte';
  // import AccordionItem  from '$lib/AccordionItem.svelte';
  
  import { Accordion } from 'naon-sveltestrap';
  import { AccordionItem } from  'naon-sveltestrap';

</script>

<Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion>