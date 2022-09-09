<script context="module">
	// @ts-ignore
	export function handle(id, name) {
		return {
			id: id,
			name: name,
			click: click,
			isFocused: isFocused,
			isDisabled: isDisabled,
			data: {},
			state: {
				focused: false,
				disabled: false
			}
		};
	}

	// @ts-ignore
	function click(handler) {
		console.debug(handler.name + ' did not inject a handler ');
		handler.state.focused = true;
	}

	// @ts-ignore
	function isFocused(handler) {
		return handler.state.focused;
	}

	// @ts-ignore
	function isDisabled(handler) {
		return handler.state.disabled;
	}
</script>
