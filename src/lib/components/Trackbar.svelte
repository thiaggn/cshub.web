<script lang="ts">
	import type {Video} from "$lib/types";

	export let video: Video;
</script>

<div class="trackbar">
	{#each video.parts as part}
		{@const size = (part.end - part.start) / video.length}
		<div class="wrapper" style:--size={size}>
			<div class="part"></div>
		</div>
	{/each}
</div>

<style lang="scss">
	.trackbar {
		display: flex;
		gap: 3px;
		position: relative;
		height: 18px;
		width: 100%;

		.wrapper {
			display: flex;
			align-items: flex-end;
			height: 100%;
			width: calc(var(--size) * 100%);
			cursor: pointer;
			padding-bottom: 3px;

			&:hover {
				.part {
					height: 9px;
					transform: translateY(3px);
				}
			}

			.part {
				width: 100%;
				height: 3px;
				background: var(--white-weak);
				transition: 150ms;
			}
		}
	}
</style>