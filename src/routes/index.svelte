<script>
	import { state } from '$lib/stores';

	import Start from '$lib/Start.svelte';
	import GameLayout from '$lib/GameLayout.svelte';

	$: showStart = $state != 1;
</script>

{#if showStart} <Start /> {:else} <GameLayout /> {/if}
