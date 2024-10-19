<script lang="ts">
	import type {Chapter} from "$lib/types";
	import Title from "$lib/components/Title.svelte";
	import {trajectory} from "$lib/stores/steps";
	import {page} from "$app/stores";
	import {formatTime} from "$lib/utils";

	export let chapter: Chapter;
</script>

<div class="wrapper">
	<Title>{chapter.title}</Title>
	<div class="lessons">
		{#each chapter.videos as video}
			<a class="player" href="/watch/{video.id}" on:click={() => trajectory.push($page.url.pathname)}>
				<div class="thumb">
					<span class="detail tag">{video.tag}</span>
					<span class="detail length">{formatTime(video.length)}</span>
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
				color: var(--white-opaque);
				background: linear-gradient(45deg, var(--gray-light), var(--primary-dark));
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
					position: absolute;
				}

				.length {
					bottom: 4px;
					right: 4px;
				}

				.tag {
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