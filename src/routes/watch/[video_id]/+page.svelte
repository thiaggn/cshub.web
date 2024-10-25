<script lang="ts">
	import {player} from "$lib/stores/player";
	import PartList from "$lib/components/list/PartList.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";
	import Player from "$lib/components/player/Player.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import NextVideo from "$lib/components/NextVideo.svelte";

	export let data;

	$: if(data.video) {
		$player.parts = data.video.parts.map(p => ({
			info: p,
			watched: 0,
		}))

		$player.time = 0;
	}
</script>

<div class="watch" in:fly={{x: 4, duration: 300, easing: quadOut}}>
	<main class="hidescroll">
		<Player video={data.video}/>
		<div class="bar">
			<div class="about">
				<div class="title">{data.video.title}</div>
				<div class="module">{data.video.moduleTitle}</div>
			</div>

			<div class="actions">
				<div class="group">
					<div class="button">
						<Icon name="download" color="var(--white-opaque)" weight={300}/>
						<span>Download</span>
					</div>
					<div class="button">
						<Icon name="bookmark" color="var(--white-opaque)" weight={300}/>
						<span>Favoritar</span>
					</div>
				</div>
			</div>
		</div>
		<div class="description"></div>
	</main>
	<aside>
		<NextVideo video={data.video}/>
		<div>
			<div class="title">Partes</div>
			<PartList video={data.video}/>
		</div>
	</aside>
</div>

<style lang="scss">
	.watch {
		display: grid;
		grid-template-columns: 7fr 3fr;
		gap: 24px;
		min-height: 0;
		min-width: 0;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		padding-bottom: 24px;
		padding-right: 60px;
		padding-top: 16px;

		@media (max-width: 1240px) {
			grid-template-columns: 6fr 3fr;
		}

		main {
			.bar {
				display: flex;
				justify-content: space-between;
				margin: 18px 0;
				height: 45px;

				.about {
					.module {
						color: var(--gray-light);
					}

					.title {
						font-size: 1.6rem;
						font-weight: 600;
						color: var(--white-opaque);
					}
				}

				.actions {
					display: flex;
					align-items: center;
					gap: 8px;
					height: 100%;


					.group {
						display: flex;
						height: 36px;
						border: 1px solid var(--gray-dark);
						border-radius: 8px;
						overflow: hidden;

						.button {
							height: 100%;
							padding: 0 8px;
							gap: 4px;
							font-size: 1.3rem;
							display: flex;
							align-items: center;
							justify-content: center;
							transition: 200ms;
							cursor: pointer;

							span {
								font-size: 1.3rem;
								font-weight: 500;
								color: var(--white-opaque);
							}

							&:first-of-type {
								padding-left: 10px;
							}

							&:last-of-type {
								padding-right: 10px;
							}

							&:not(&:last-of-type) {
								border-right: 1px solid var(--gray-dark);
							}

							&:hover {
								background: var(--gray-dark);
							}
						}
					}
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
			display: flex;
			flex-direction: column;
			min-height: 0;
			min-width: 0;
			height: 100%;
			gap: 16px;

			.title {
				font-size: 1.6rem;
				font-weight: 600;
				color: var(--white-opaque);
			}
		}
	}
</style>