<div on:click {...$$props}><slot /></div>

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

	.start {
		max-width: 10em;
		margin: 0.75em 0 -0.25em;
		font-weight: 600;
		box-shadow: var(--shadow);
	}
</style>
