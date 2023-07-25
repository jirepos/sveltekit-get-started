<!-- Tree.svelte -->
<script>
	import Node from "./Node.svelte";
	export let data; // type Node
</script>

<ul>
	<Node node={data} />	
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
</style>