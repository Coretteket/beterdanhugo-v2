<script>
	import Measure from './Measure.svelte';
	export let id = 0;

	function capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const btns = [
		['basisregels', ['socdis', 'workhome', 'masks']],
		['recreatie', ['events', 'theater', 'gather']],
		['horeca en winkels', ['clubs', 'horeca', 'shops']],
		['onderwijs', ['eduni', 'edmid', 'edlow']],
		['lockdowns', ['lockdown', 'curfew', 'borders']]
	];
</script>

<b>{capitalize(btns[id][0])}</b>

{#each btns[id][1] as btn}
	<Measure name={btn} />
{/each}

<style>
	b {
		display: block;
		font-weight: 800;
		font-size: 1.05em;
		margin: 0.4em 0;
	}
</style>
