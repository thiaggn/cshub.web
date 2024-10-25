<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import {createEventDispatcher} from "svelte";
	import type {FullScreenEvent} from "$lib/types";

	export let fullscreen = false

	const dispatch = createEventDispatcher<FullScreenEvent>()


	function handleClick() {
		dispatch('toggle', {
			fullscreen
		})
		fullscreen = !fullscreen
	}
</script>

<div class="fullscreen-toggle" on:click={handleClick} role="none">
	<Icon color="var(--white-opaque)"
		  name={fullscreen ? "close_fullscreen" : "open_in_full"}/>
</div>

<style lang="scss">
	.fullscreen-toggle {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 8px;
	}
</style>