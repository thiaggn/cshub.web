<script lang="ts">
	import {formatTime} from "$lib/utils.js";

	export let time  = 0;
	export let length = 0;
</script>

<div class="timestamp">
	<span class="container">{formatTime(time)}</span>
	<span class="container length">{formatTime(length)}</span>
</div>

<style lang="scss">
	.timestamp {
		height: 100%;
		padding: 0 8px;
		font-size: 1.3rem;
		cursor: default;
		display: flex;
		align-items: center;
		gap: 4px;

		.container {
			border: 1px solid var(--white-weaker);
			padding: 1px 4px;
			border-radius: 4px;

			&.length {
				backdrop-filter: none;
				border: none;
			}
		}
	}
</style>