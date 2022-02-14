<script>
	import { state } from '$lib/stores';
	import Button from '$lib/Button.svelte';
</script>

<p>
	Na twee jaar persconferenties heeft iedereen eigen ideeën over het coronabeleid. Maar kunnen we
	het echt beter dan Hugo de Jonge? In dit spel kom jij voor dezelfde keuzes te staan, maar mag je
	je eigen weg door de pandemie kiezen.
</p>
<p>
	Voer maatregelen in en hef ze weer op om de coronacijfers te zien veranderen, en hou het nieuws in
	de gaten om te kijken hoe jouw beleid in de samenleving valt. Krijg jij corona onder controle?
</p>

<!-- <a href="/game">Start het spel</a> -->
<Button on:click={() => ($state = 1)} class="start">Start het spel</Button>

<style lang="scss">
	p {
		line-height: 1.1;
		max-width: 600px;
		margin-top: 0;
		margin-bottom: 0.5em;

		@media (max-width: 765px) {
			line-height: 1.2;
		}
	}
</style>
