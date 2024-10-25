<script lang="ts">
	import type {Chapter} from "$lib/types";
	import Title from "$lib/components/Title.svelte";
	import {formatTime} from "$lib/utils";

	export let chapter: Chapter;
</script>

<div class="wrapper">
	<Title>{chapter.title}</Title>
	<div class="lessons">
		{#each chapter.videos as video}
			<a class="player" href="/watch/{video.id}">
				<div class="thumb">
					<span class="detail tag">{video.tag}</span>
					<div class="wrapper">
						<span class="detail length">{formatTime(video.length)}</span>
						{#if video.progress}
							<div class="progress">
								<div class="part" style:--progress={video.progress / video.length}></div>
							</div>
						{/if}
					</div>
				</div>
				<div class="title">{video.title}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.lessons {
		display: grid;
		grid-column-gap: 8px;
		grid-row-gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));

		.player {
			display: flex;
			flex-direction: column;
			gap: 8px;
			overflow: hidden;
			cursor: pointer;

			.thumb {
				overflow: hidden;
				color: var(--white-opaque);
				background: linear-gradient(45deg, var(--black-opaque), var(--primary-dark));
				width: 100%;
				aspect-ratio: 16 / 9;
				border-radius: 4px;
				position: relative;
				transition: 200ms;

				&:hover {
					filter: brightness(0.7);
				}

				.detail {
					font-size: 1.2rem;
					font-weight: 600;
					background: rgba(0, 0, 0, 0.5);
					padding: 1px 4px;
					border-radius: 2px;
				}

				.wrapper {
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-end;
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;

					.length {
						margin: 4px;
					}

					.progress {
						width: 100%;
						height: 4px;
						background: var(--black-opaque);

						.part {
							height: 100%;
							width: calc(100% * var(--progress));
							background: var(--primary);
						}
					}
				}


				.tag {
					position: absolute;
					display: flex;
					align-items: center;
					justify-content: center;
					height: 20px;
					aspect-ratio: 1 / 1;
					top: 4px;
					left: 4px;
				}
			}

			.title {
				font-size: 1.3rem;
				line-height: 1.6rem;
				color: var(--white-opaque);
				height: calc(2 * 1.6rem);

			}
		}
	}

</style>