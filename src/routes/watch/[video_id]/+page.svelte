<script lang="ts">
	import PartList from "$lib/components/list/PartList.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";
	import Player from "$lib/components/Player.svelte";
	import Icon from "$lib/components/Icon.svelte";

	export let data;
</script>

<div class="watch" in:fly={{x: 8, duration: 300, easing: quadOut}}>
	<main class="hidescroll">
		<Player/>
		<div class="bar">
			<div class="about">
				<div class="title">{data.video.title}</div>
				<div class="module">{data.video.moduleTitle}</div>
			</div>

			<div class="actions">
				<div class="group">
					<div class="button">
						<Icon name="download" color="var(--white-opaque)" weight={300}/>
					</div>
					<div class="button">
						<Icon name="bookmark" color="var(--white-opaque)" weight={300}/>
					</div>
				</div>

			</div>
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
		overflow-y: scroll;
		padding-bottom: 24px;

		main {
			padding-top: 12px;

			.bar {
				display: flex;
				justify-content: space-between;
				margin: 12px 0 24px;
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
						height:36px;
						border: 1px solid var(--gray-darker);
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

							&:first-of-type {
								padding-left: 10px;
							}

							&:last-of-type {
								padding-right: 10px;
							}

							&:not(&:last-of-type) {
								border-right: 1px solid var(--gray-darker);
							}

							span {
								color: var(--white-opaque);
								font-weight: 500;
								line-height: 1rem;
							}

							&:hover {
								background: var(--gray-darker);
							}
						}

						.label {
							font-size: 1.3rem;
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
			padding-top: 12px;
			min-height: 0;
			min-width: 0;
			height: 100%;
			overflow-y: scroll;
		}
	}
</style>