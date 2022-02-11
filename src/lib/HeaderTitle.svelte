<div>
	<h1>Beter dan Hugo</h1>
	<span>v2</span>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		h1 {
			font-weight: 900;
			line-height: 1.1;
			margin: 0;
			font-size: min(5vw, 2.2em);
			@media (max-width: 765px) {
				font-size: min(10vw, 2.2em);
			}
		}
		span {
			background: var(--ltxt);
			color: var(--back);
			border-radius: 5px;
			padding: 1px 4px;
			margin-left: 0.5em;
			font-weight: 900;
			font-size: min(5vw, 1.5em);
		}
	}
</style>
