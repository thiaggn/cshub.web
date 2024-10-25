<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	export let active = true;

</script>

<div class="subtitle-toggle" class:active
	 on:click={() => active = !active} role="none">
	<Icon name="match_case" size={32} color="var(--white-opaque)"/>
</div>

<style lang="scss">
	.subtitle-toggle {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 8px;
		opacity: 0.2;

		transition: 300ms;

		&.active {
			opacity: 1;
		}
	}
</style>