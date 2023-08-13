<script lang="ts">
	import c3 from 'c3';
	import * as d3 from 'd3';
	import 'c3/c3.css';
	import { onMount } from 'svelte';

	const initChart = () => {
		// @ts-ignore
		let chart = c3.generate({
			bindto: '#chart',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				]
			}
		});
	};

	const initChart2 = () => {
		// @ts-ignore
		let chart = c3.generate({
			bindto: '#chart2',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],
				axes: {
					data2: 'y2'
				},
				types: {
					data2: 'bar'
				}
			},
			axis: {
				y: {
					label: {
						text: 'Y Label',
						position: 'outer-middle'
					},
					tick: {
						// @ts-ignore
						format: d3.format('$,') // ADD
					}
				},
				y2: {
					show: true,
					label: {
						text: 'Y2 Label',
						position: 'outer-middle'
					}
				}
			}
		});
	};

	onMount(() => {
		initChart();
		initChart2();
	});
</script>

<div id="chart" />
<div id="chart2" />
