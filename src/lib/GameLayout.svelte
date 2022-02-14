<script>
	import Time from './Time.svelte';
	import Box from './Box.svelte';
	import Chart from './Chart.svelte';
	import MeasureList from './MeasureList.svelte';
</script>

<div class="container">
	<div class="side">
		<Box><Chart /></Box>
	</div>
	<div class="time">
		<Time />
	</div>
	{#each [...Array(5).keys()] as id}
		<div class={'btn' + id}><MeasureList {id} /></div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-auto-columns: 1fr;
		gap: 0 1em;
		grid-auto-flow: row;
		grid-template-columns: minmax(180px, 1fr) minmax(180px, 1fr) 350px;
		grid-template-rows: repeat(4, auto);
		grid-template-areas: 'time time side' 'btn0 btn3 side' 'btn1 btn4 side' 'btn2 btn5 side';

		@media (max-width: 1000px) {
			grid-template-columns: 350px 350px;
			grid-template-rows: repeat(7, auto);
			grid-template-areas: 'time side' 'btn0 side' 'btn1 side' 'btn2 side' 'btn3 side' 'btn4 side' 'btn5 side';
		}

		@media (max-width: 765px) {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(7, auto);
			grid-template-areas: 'side' 'time' 'btn0' 'btn1' 'btn2' 'btn3' 'btn4' 'btn5';
		}
	}

	$list: 'side', 'time', 'btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5';

	@each $i in $list {
		.#{$i} {
			grid-area: #{$i};
		}
	}
</style>
