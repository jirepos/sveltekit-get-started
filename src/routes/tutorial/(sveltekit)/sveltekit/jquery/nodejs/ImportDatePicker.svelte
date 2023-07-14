<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import jQuery from "jquery";
  // import 'jquery-ui/ui/widgets/datepicker.js'

  export let id:string; 

  onMount(async () => {
    // @ts-ignore
    window.jQuery = jQuery; 
    // @ts-ignore
    window.jQuery("#" + id).html("Hello");

  });
</script>

<div id="{id}"></div>