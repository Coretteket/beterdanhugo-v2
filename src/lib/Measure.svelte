<script>
	import Icon from './Icon.svelte';
	import Button from './Button.svelte';

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

<Button>
	<span><Icon {name} /></span>
	{names[name]}
</Button>

<style>
	span {
		width: 20px;
		margin-right: 0.6em;
		text-align: center;
	}
</style>
