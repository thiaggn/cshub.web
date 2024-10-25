<script lang="ts">
	import type {Video} from "$lib/types";
	import {player} from "$lib/stores/player";

	export let video: Video;
	let trackbarwidth: number
</script>

<div class="trackbar" bind:offsetWidth={trackbarwidth}>
	{#each $player.parts as part}
		{@const durationRatio = (part.info.end - part.info.start)/video.length}
		{@const width = trackbarwidth * durationRatio}
		<div class="part" style:width="{width}px">
			<div class="visible">
				<div class="progress" style:width="{width * part.watched}px"></div>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.trackbar {
		width: 100%;
		height: 30px;
		display: flex;
		align-items: flex-end;

		.part {
			height: 6px;

			.visible {
				width: calc(100% - 3px);
				overflow: hidden;
				background: var(--white-weaker);
				height: 100%;

				.progress {
					height: 100%;
					width: 50%;
					background: var(--primary-saturated);
				}
			}
		}
	}

</style>