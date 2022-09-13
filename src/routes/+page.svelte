<script>
	import RadiusRadioButton from '$uikit/radiusRadioButton.svelte';
	import PillRadioBox from '$uikit/pillRadioBox.svelte';
	import PillBar from '$uikit/pillBar.svelte';
	let selected = 'route-A';
</script>

<h1>Component Playground</h1>

<PillBar>
	<PillRadioBox>
		<RadiusRadioButton id="task-list" bind:selected value="route-A" label="List" />
		<RadiusRadioButton id="task-kanban" bind:selected value="route-B" label="Kanban" />
		<RadiusRadioButton id="task-gantt" bind:selected value="route-C" label="Gantt" />
	</PillRadioBox>
</PillBar>

<style>
</style>
