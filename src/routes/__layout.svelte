<script>
	import '../global.css';
	import Header from '$lib/Header.svelte';

	import { dark } from '$lib/_stores';
	import { browser } from '$app/env';

	$: if (browser) {
		document.documentElement.setAttribute('data-theme', $dark ? 'dark' : 'light');
		window.localStorage.setItem('dark', JSON.stringify($dark));
	}

	if (browser) {
		let stored = JSON.parse(window.localStorage.getItem('dark'));
		let prefer = window.matchMedia('(prefers-color-scheme: dark)').matches;
		$dark = stored || (stored === null && prefer);
	}
</script>

<main>
	<Header />
	<slot />
</main>

<style lang="scss">
	main {
		font-family: 'Nunito Sans', sans-serif;
		font-size: 16px;
		user-select: none;
		color: var(--txt);
		max-width: 924px;
		margin: 5vh auto;
		margin-top: 5vh;
		padding: 0 min(5vw, 25px);

		@media (max-width: 1000px) {
			margin: 1.5em auto;
			width: 705px;
		}

		@media (max-width: 765px) {
			width: 90%;
			max-width: 450px;
			font-size: 18px;
		}
	}
</style>
