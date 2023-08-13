<script lang="ts">
	// https://www.chartjs.org/docs/4.3.3/getting-started/installation
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	import * as Utils from './utils.js';

	let chartEl;
	let chartEl2;

	const labels = Utils.months({ count: 7 });
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
	};

	const config = {
		type: 'line',
		data: data
	};

	const initChart = () => {
		// @ts-ignore
		new Chart(chartEl, config);
	};

	const data2 = {
		labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [11, 16, 7, 3, 14],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(75, 192, 192)',
					'rgb(255, 205, 86)',
					'rgb(201, 203, 207)',
					'rgb(54, 162, 235)'
				]
			}
		]
	};

	const config2 = {
		type: 'polarArea',
		data: data2,
		options: {}
	};

	const initChart2 = () => {
		// @ts-ignore
		new Chart(chartEl2, config2);
	};

	onMount(() => {
		initChart();
    initChart2();
	});
</script>
<div class="canvas">
  <canvas bind:this={chartEl2}  />
</div>
<div class="canvas">
  <canvas bind:this={chartEl}   />
</div>


<style>
  .canvas {
    width: 50%;
    height: 50%;
  }
</style>