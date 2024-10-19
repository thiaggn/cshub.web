<script lang="ts">
	import type {Video} from "$lib/types";
	import {formatTime} from "$lib/utils";

	export let video: Video;
</script>

<div class="parts">
	<div class="title">Partes</div>
	<div class="list">
		{#each video.parts as part}
			<div class="part">
				<div class="description">
					<div class="title">{part.title}</div>
					<div class="timestamp">{formatTime(part.start)}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.parts {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 1.3rem;

		> .title {
			font-size: 1.6rem;
			font-weight: 600;
		}

		.list {
			display: flex;
			flex-direction: column;
			padding-right: 24px;

			.part {
				height: 45px;
				width: 100%;
				display: flex;
				align-items: center;
				transition: color 500ms;
				cursor: pointer;
				color: var(--gray-lighter);
				flex-shrink: 0;

				&:not(.active):hover {
					color: var(--white-opaque);
				}

				&:not(&:last-of-type) {
					border-bottom: 1px solid var(--gray-darker);
				}

				.description {
					width: 100%;
					display: flex;
					justify-content: space-between;
					gap: 8px;

				}
			}
		}
	}
</style>