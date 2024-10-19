<script lang="ts">
	import PartList from "$lib/components/list/PartList.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";

	export let data;
</script>

<div class="watch" in:fly={{x: 8, duration: 300, easing: quadOut}}>
	<main class="hidescroll">
		<div class="player"></div>
		<div class="about">
			<div class="module">{data.video.moduleTitle}</div>
			<div class="title">{data.video.title}</div>
		</div>
		<div class="description"></div>
	</main>
	<aside>
		<PartList video={data.video}/>
	</aside>
</div>

<style lang="scss">
	.watch {
		display: grid;
		grid-template-columns: 6fr 3fr;
		gap: 24px;
		min-height: 0;
		min-width: 0;
		height: 100%;
		width: 100%;

		main {
			min-height: 0;
			min-width: 0;
			height: 100%;
			overflow-y: scroll;
			padding-top: 24px;

			.player {
				border-radius: 8px;
				width: 100%;
				aspect-ratio: 16 / 9;
				background: var(--primary-dark);
			}

			.about {
				margin-top: 12px;
				display: flex;
				flex-direction: column;

				.module {
					color: var(--gray-light);
				}

				.title {
					font-size: 1.6rem;
					font-weight: 600;
					color: var(--white-opaque);
				}
			}

			.description {
				width: 100%;
				height: 500px;
				border-radius: 8px;
				border: 1px solid var(--gray-dark);
			}
		}

		aside {
			padding-top: 24px;
			min-height: 0;
			min-width: 0;
			height: 100%;
			overflow-y: scroll;
		}
	}
</style>