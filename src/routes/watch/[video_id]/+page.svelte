<script lang="ts">
	import PartList from "$lib/components/list/PartList.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";
	import Player from "$lib/components/Player.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import {formatTime} from "$lib/utils";

	export let data;
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
					<div class="item">
						<Icon name="download" color="var(--white-opaque)" weight={300}/>
						<span>Download</span>
					</div>
					<div class="item">
						<Icon name="bookmark" color="var(--white-opaque)" weight={300}/>
						<span>Favoritar</span>
					</div>
				</div>

			</div>
		</div>
		<div class="description"></div>
	</main>
	<aside>
		<div class="next">
			<div class="title">Próximo vídeo</div>
			{#if data.video.next !== undefined}
				<a class="container" href="/watch/{data.video.next.id}">
					<div class="thumb">
					</div>
					<div class="wrapper">
						<div class="title">{data.video.next.title}</div>
						<div class="length">{formatTime(data.video.next.length)}</div>
					</div>
				</a>
			{:else}
				<div class="container empty">
					<div class="warn">Esse é o último vídeo do capítulo.</div>
				</div>
			{/if}
		</div>
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

						.item {
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
				font-size: 1.4rem;
				font-weight: 600;
			}


			.next {
				display: flex;
				flex-direction: column;
				gap: 8px;


				.container {
					overflow: hidden;
					display: flex;
					border-radius: 4px;
					height: 86px;
					border: 1px solid var(--gray-dark);
					color: var(--gray-lighter);
					transition: 200ms;

					&.empty {
						justify-content: center;
						padding: 16px;
						display: flex;
						align-items: center;
					}

					&:hover {
						.wrapper .title {
							color: var(--white-opaque);
						}
					}

					.wrapper {
						padding: 10px;
						width: 100%;

						.title {
							transition: 200ms;
							font-size: 1.3rem;
							margin-bottom: 8px;
						}

						.length {
							width: fit-content;
							padding: 2px 4px;
							border-radius: 2px;
							font-size: 1.2rem;
							bottom: 4px;
							right: 4px;
							background: var(--purple-translucid);
						}

					}

					.thumb {
						height: 100%;
						aspect-ratio: 16 / 9;
						position: relative;
						background: black;
					}
				}

			}
		}
	}
</style>