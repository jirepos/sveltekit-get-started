<script lang="ts">
	// https://semgrep.dev/advisory/npm-package/select-4
	// import { select4 } from 'select-4';
  import { select4 } from 'select-4/dist/select4.es.js';
  
	import 'select-4/dist/style-bootstrap.css'; // with bootstrap 5 styles; Otherwise just use style.css
  import { onMount, afterUpdate } from 'svelte';

  let selectEl;
  onMount( () => {
    select4(selectEl, {
      dataSource: ['Apple', 'Orange', 'Banana', 'Mango', 'Guava', 'Strawberry'],
    });
  });
</script>

<div>
  <ul bind:this={selectEl}></ul>
</div>