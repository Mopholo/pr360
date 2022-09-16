<script context="module">
	import { writable } from 'svelte/store';
	const theme = writable('system');

	export { theme };

	const availableThemes = [{ light: 'Light' }, { hybrid: 'Hybrid' }, { dark: 'Dark' }];
</script>

<select bind:value={$theme}>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
