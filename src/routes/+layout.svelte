<script>
	// @ts-nocheck

	import '$css/app.css';
	import { onMount } from 'svelte';

	let root;
	let scheme = 'hybrid';

	function setColorScheme(userScheme) {
		if (!root) return;
		root.dataset.theme = userScheme;
		console.log('Set Color Scheme to ' + userScheme);
	}

	$: setColorScheme(scheme);

	function cycle() {
		if (scheme === 'light') scheme = 'hybrid';
		else if (scheme === 'hybrid') scheme = 'dark';
		else if (scheme === 'dark') scheme = 'light';
		console.log('Swap Color Scheme');
	}

	onMount(() => {
		root = document.documentElement;
	});
</script>

<div on:click={() => cycle()} class="themeCheck">
	<div>Text</div>
</div>
<slot />

<style lang="scss">
	@use '../scss/main' as *;

	.themeCheck {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 200px;
		font-size: 32px;
		border-radius: 6px;
		border-style: solid;
		border-width: 3px;
		cursor: pointer;
		user-select: none;

		border-color: var(--colors-border);
		background-color: var(--colors-background);
		color: var(--colors-text);
	}
</style>
