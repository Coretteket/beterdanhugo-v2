<script>
	import icons from '$lib/_icons';
	export let name = '';
	export let brand = false;
	export let solid = false;
	export let toggle = false;

	let weight = brand ? 100 : solid ? 300 : 200;
</script>

<span class:toggle style:font-weight={weight}>{@html '&#x' + icons[name]}</span>

<style>
	span {
		display: inline-block;
		font-family: 'fa';
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-rendering: auto;
		line-height: 1;
		transition: transform 0.4s ease;
	}
	.toggle {
		transform: var(--toggle);
	}
</style>
