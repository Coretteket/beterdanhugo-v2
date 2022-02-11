<script>
	import Icon from './Icon.svelte';

	import { page } from '$app/stores';
	import { dark } from './_stores';

	$: faqUrl = $page.url.pathname === '/faq' ? '/' : '/faq';

	const githubUrl = 'https://github.com/coretteket/beterdanhugo-v2';
	const twitterUrl = 'https://twitter.com/intent/user?screen_name=coretteket';
</script>

<div>
	<span on:click={() => ($dark = !$dark)}>
		<Icon name="theme" solid toggle />
	</span>
	<a href={faqUrl}>
		<Icon name={faqUrl === '/faq' ? 'faq' : 'back'} solid />
	</a>
	<a href={githubUrl} rel="noreferrer" target="_blank">
		<Icon name="github" brand />
	</a>
	<a href={twitterUrl} rel="noreferrer" target="_blank">
		<Icon name="twitter" brand /> <span>@coretteket</span>
	</a>
</div>

<style lang="scss">
	div {
		margin-left: auto;
		margin-top: 0.2em;
		& > * {
			display: inline;
			cursor: pointer;
			color: var(--ltxt);
			margin-right: 0.5em;
			font-size: 1.4em;
			font-weight: 600;
			text-decoration: none;
			opacity: 0.8;
			transition: opacity 0.2s;
			transform: scale(1);
			&:hover {
				opacity: 1;
			}
			span {
				@media (max-width: 765px) {
					display: none;
				}
			}
		}
	}
</style>
