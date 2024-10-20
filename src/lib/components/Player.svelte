<script lang="ts">
	import type {Video} from "$lib/types";
	import Icon from "$lib/components/Icon.svelte";
	import Trackbar from "$lib/components/Trackbar.svelte";
	import {formatTime} from "$lib/utils";
	import VolumeSlider from "$lib/components/VolumeSlider.svelte";
	import {fade} from "svelte/transition";

	export let video: Video;
	let showVolumeSlider = false;
	let showSubtitles = true;
	let showControls = false;
	let isFullscreen = false;

	let volume: number = 70;
	let paused = true;
	let time = 0;

	let timeout: number;

	function handleMouseMove() {
		showControls = true

		clearTimeout(timeout)
		timeout = setTimeout(function hideControls() {
			showControls = false
		}, 3000)
	}
</script>

<div class="player"
	 on:mousemove={handleMouseMove}
	 on:mouseleave={() => showControls = false}
	 role="none">

	<img src="ex.jpg" alt="thumb" class="thumb">
	{#if showControls}
		<div class="control" role="none"
			 on:mouseleave={()=> showVolumeSlider=false}
			 transition:fade={{duration: 200}}>

			<Trackbar video={video}/>
			<div class="menu">
				<div class="container">
					<div class="item play" id="play" on:click={()=>paused = !paused} role="none">
						<Icon name={paused ? "play_arrow" : "pause"} size={28} color="var(--white-opaque)"/>
					</div>

					<div class="item volume" on:mouseenter={()=> showVolumeSlider=true} role="none">
						<VolumeSlider bind:value={volume} bind:expanded={showVolumeSlider}/>
					</div>

					<div class="item time">
						<span class="container">{formatTime(time)}</span>
						<span class="container length">{formatTime(video.length)}</span>
					</div>
				</div>

				<div class="container">
					<div class="item subtitles" class:inactive={!showSubtitles}
						 on:click={() => showSubtitles = !showSubtitles} role="none"
					>
						<Icon name="subtitles" size={30} weight={300} color="var(--white-opaque)"/>
					</div>
					<div class="item expand" on:click={() => isFullscreen = !isFullscreen} role="none">
						<Icon color="var(--white-opaque)"
							  name={isFullscreen ? "close_fullscreen" : "open_in_full"}/>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.player {
		overflow: hidden;
		border-radius: 4px;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--primary-dark);
		position: relative;

		.thumb {
			width: 100%;
			height: 100%;
		}

		.control {
			display: flex;
			flex-direction: column;
			padding: 0 12px;
			position: absolute;
			bottom: 0;
			width: 100%;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);

			.menu {
				height: 42px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				> .container {
					display: flex;
					height: 100%;
					align-items: center;

					.item {
						cursor: pointer;
						display: flex;
						align-items: center;
						height: 100%;
						padding: 0 8px;
					}

					.play {
						padding: 0 8px 0 0;
					}

					.volume {
						padding: 0 0 0 8px;
					}

					.time {
						font-size: 1.3rem;
						cursor: default;
						display: flex;
						align-items: center;
						gap: 4px;

						.container {
							border: 1px solid var(--white-weaker);
							padding: 1px 4px;
							border-radius: 4px;

							&.length {
								border: none;
							}
						}
					}

					.subtitles {
						transition: 300ms;

						&.inactive {
							opacity: 0.2;
						}
					}
				}
			}
		}
	}
</style>