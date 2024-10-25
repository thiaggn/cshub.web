<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import {Velocity} from "$lib/types";

	export let velocity: number;
</script>

<div class="speed">
	<Icon name="fast_forward" weight={300} size={30} color="var(--white-opaque)"/>
</div>

<style lang="scss">
	.speed {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 8px;
	}
</style>