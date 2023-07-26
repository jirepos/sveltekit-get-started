<script>
	import EndTable from './EndTable.svelte'
	
	let items = [
		{material: 'wood', legs: 4, fromIkea: true},
		{material: 'metal', fromIkea: false},
		{legs: 4, fromIkea: true},
		{fromIkea: true},
		{fromIkea: false}
	]
</script>

{#each items as furniture}
  <!-- {`{...furniture}`}는 spread props를 사용  -->
	<EndTable {...furniture} />
{/each}

