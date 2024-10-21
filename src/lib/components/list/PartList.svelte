<script lang="ts">
	import type {Part, Video} from "$lib/types";
	import {formatTime} from "$lib/utils";
	import {player} from "$lib/stores/player";
	export let video: Video;

	function selectPart(p: Part) {
		$player.part = p;
		$player.time = p.start;
	}
</script>

<div class="list">
	{#each video.parts as part, i}
		<div class="part" class:active={$player.part.id === part.id}
			 role="none" on:click={() => selectPart(part)}>
			<div class="description">
				<div class="title">{part.title}</div>
				<div class="timestamp">{formatTime(part.start)}</div>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">

	.list {
		display: flex;
		flex-direction: column;

		.part {
			height: 45px;
			width: 100%;
			display: flex;
			align-items: center;
			transition: 500ms;
			cursor: pointer;
			color: var(--gray-lighter);
			flex-shrink: 0;


			&.active {
				color: var(--primary);
			}

			&:not(.active):hover {
				color: var(--white-opaque);
			}

			&:not(&:last-of-type) {
				border-bottom: 1px solid var(--gray-dark);
			}

			.description {
				width: 100%;
				display: flex;
				justify-content: space-between;
				gap: 8px;

			}
		}
	}
</style>