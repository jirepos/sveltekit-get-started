<script lang="ts">
	import Handsontable from 'handsontable';
	import 'handsontable/dist/handsontable.full.css';
	import { onMount } from 'svelte';

	let hansonEle: HTMLDivElement;

	const data = [
		['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
		['2019', 10, 11, 12, 13],
		['2020', 20, 11, 14, 13],
		['2021', 30, 15, 12, 13]
	];

	onMount(() => {
		const hot = new Handsontable(hansonEle, {
			data: data,
			rowHeaders: true,
			colHeaders: true,
			filters: true,
			dropdownMenu: true,
			licenseKey: 'non-commercial-and-evaluation'
		});
	});
</script>

<div bind:this={hansonEle} id="example" />
