<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";

	export let icon = ""
</script>

<div class="title">
	{#if icon}
		<Icon name={icon}/>
	{/if}
	<div class="text"><slot/></div>
</div>

<style lang="scss">
	.title {
		display: flex;
		gap: 8px;
		padding-bottom: 12px;
		align-items: center;
		user-select: none;

		.text {
			font-weight: 600;
			font-size: 1.6rem;
		}
	}
</style>