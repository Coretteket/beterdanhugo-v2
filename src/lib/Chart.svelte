<script>
	import { onMount, afterUpdate, onDestroy } from 'svelte';

	export let data = {
		labels: [],
		datasets: [{ data: [] }],
		yMarkers: {},
		yRegions: []
	};

	export let type = 'line';
	export let options = {};
	export let plugins = [];

	let chart = null;
	let chartRef;

	onMount(() => {
		chart = new Chart(chartRef, {
			type,
			data,
			options,
			plugins
		});
	});

	afterUpdate(() => {
		if (!chart) return;
		chart.data = data;
		chart.type = type;
		chart.options = options;
		chart.plugins = plugins;
		chart.update();
	});

	onDestroy(() => {
		chart = null;
	});
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@3/dist/chart.min.js" crossorigin="anonymous">
	</script>
</svelte:head>

<canvas bind:this={chartRef} />
