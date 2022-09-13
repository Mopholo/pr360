<script context="module">
	const name = 'uikit/radiusRadioButton';
</script>

<script>
	// @ts-nocheck
	export let id;
	export let value;
	export let label;
	export let selected;

	$: if (selected === value) console.log('Selected Value ' + selected);

	function select() {
		selected = value;
	}
</script>

<div
	{id}
	on:click={() => select()}
	class="radiusRadioButton"
	class:radiusRadioButtonSelected={selected === value}
>
	{label}
</div>

<style>
	.radiusRadioButton {
		display: block;
		box-sizing: content-box;
		float: left;
		cursor: pointer;
		user-select: none;
		transform: translate3d(0, 0, 0);

		/* Token Design Referece */
		font-family: 'Lato';
		font-size: inherit;
		padding: 5px;
		color: white;

		/* Theme */
		background-color: #7469aa;
		border-radius: 6px;
	}

	.radiusRadioButton:hover {
		box-shadow: inset 0px 0px 0px 2px #ffffff;
	}

	.radiusRadioButtonSelected {
		color: rgb(0, 0, 0);
		background-color: #9affcf;
		box-shadow: inset 0px 0px 0px 2px rgb(255, 255, 255);
	}

	.radiusRadioButtonSelected:hover {
		box-shadow: inset 0px 0px 0px 2px rgb(255, 255, 255);
	}
</style>
