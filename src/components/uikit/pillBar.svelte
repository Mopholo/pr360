<script>
</script>

<div class="pillBox">
	<slot />
</div>

<style lang="scss">
	.pillBox {
		display: inline-flex;
		flex-direction: row;
		margin: 0;
		padding: 0;

		/* Design Token Reference */
		padding: 5px;
		gap: 5px;
		border-radius: 6px;
		border: solid 1px;

		/* Theme */
		background-color: #39334e;
	}
</style>
