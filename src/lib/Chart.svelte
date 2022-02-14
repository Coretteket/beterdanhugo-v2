<script>
	import { onMount } from 'svelte';
	import { options } from './chart';

	import { writable } from 'svelte/store';

	let data = writable({
		series: [
			[
				5, 4, 4, 8, 11, 15, 28, 44, 65, 90, 125, 156, 187, 208, 225, 240, 255, 250, 240, 225, 208,
				187, 156, 125, 90, 65, 44, 28, 15, 11, 8, 4, 4, 5
			]
		]
	});

	let loaded;
	onMount(() => {
		loaded = true;
	});

	$: if (loaded) new Chartist.Line('.ct-chart', $data, options);
</script>

<div class="ct-chart ct-octave" />
