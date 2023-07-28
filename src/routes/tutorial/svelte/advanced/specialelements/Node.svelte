<!-- Node.svelte -->
<script>
	import { slide } from 'svelte/transition';
	export let node;
	export let level = 0;

	function toggle() {
		node.expanded = !node.expanded;
	}
</script>

<li on:click={toggle} style="padding-left:{level * 1}rem" transition:slide>
	{#if !node.expanded}
		Closed!
	{:else}
		Opened!
	{/if}
	{node.data}
</li>

{#if node.expanded && node.children}
	{#each node.children as child}
		<svelte:self node={child} level={level + 1} />
	{/each}
{/if}

<style>
	li {
		border-bottom: solid 1px #eee;
		margin: 0 0;
		padding: 1rem;
		background: #fafafa;
		display: flex;
	}
</style>
