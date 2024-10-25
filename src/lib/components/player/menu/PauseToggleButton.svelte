<script>
	import Icon from "$lib/components/Icon.svelte";

	export let paused = true

	function togglePause() {
		paused = !paused
	}
</script>

<div class="button" role="none" on:click={togglePause}>
	{#if paused}
		<Icon name="play_arrow" size={28} color="var(--white-opaque)"/>
	{:else}
		<Icon name="pause" size={28} weight={300} color="var(--white-opaque)"/>
	{/if}
</div>

<style lang="scss">
	.button {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 8px 0 0;
	}
</style>