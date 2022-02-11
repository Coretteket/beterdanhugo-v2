<script>
	import Icon from '$lib/Icon.svelte';

	export let name;
	const names = {
		socdis: 'Afstand houden',
		workhome: 'Thuiswerken',
		masks: 'Mondkapjesplicht',
		events: 'Evenmenten verbieden',
		theater: 'Cultuursector sluiten',
		gather: 'Bijeenkomsten verbieden',
		clubs: 'Nachtclubs sluiten',
		horeca: 'Horeca sluiten',
		shops: 'Winkels sluiten',
		eduni: 'Hoger onderwijs sluiten',
		edmid: 'Middelbare scholen sluiten',
		edlow: 'Basisscholen sluiten',
		lockdown: 'Totale lockdown',
		curfew: 'Avondklok',
		borders: 'Grenzen sluiten'
	};
</script>

<div>
	<span><Icon {name} /></span>
	{names[name]}
</div>

<style lang="scss">
	div {
		cursor: pointer;
		font-weight: 400;
		font-size: 1em;
		border: 2px solid var(--ltxt);
		margin: 0 0 0.6em;
		border-radius: 6px;
		opacity: 1;
		transition: color 0.1s ease, background 0.1s ease, border 0.1s ease;
		color: var(--txt);
		display: flex;
		align-items: center;
		line-height: 1;
		padding: 0.5em 0.8em;
		min-width: 4em;

		@media (max-width: 765px) {
			margin-bottom: 0.45em;
		}

		@media (max-width: 1000px) {
			padding-top: 0.4em;
			padding-bottom: 0.4em;
		}
	}

	div:hover {
		background: var(--hover);
	}

	span {
		width: 20px;
		margin-right: 0.6em;
		text-align: center;
	}
</style>
