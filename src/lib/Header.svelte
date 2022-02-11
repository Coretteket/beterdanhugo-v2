<script>
	import HeaderTitle from './HeaderTitle.svelte';
	import HeaderButtons from './HeaderButtons.svelte';
</script>

<div class="header">
	<HeaderTitle />
	<HeaderButtons />
</div>
<hr />

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		@media (max-width: 765px) {
			display: block;
		}
	}

	hr {
		margin: 0.75em 0;
		background: var(--hr);
		height: 1px;
		border: 0;
		@media (max-width: 765px) {
			display: none;
		}
	}
</style>
