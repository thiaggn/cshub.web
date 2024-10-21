<script lang="ts">
	import {player} from "$lib/stores/player";
	import type {Video} from "$lib/types";
	import Icon from "$lib/components/Icon.svelte";
	import TrackBar from "$lib/components/player/TrackBar.svelte";
	import { formatTime } from "$lib/utils";
	import VolumeSlider from "$lib/components/VolumeSlider.svelte";

	export let video: Video;

	let playerDiv: HTMLDivElement;
	let volume: number = 70;

	let paused = true;
	let timeout: ReturnType<typeof setTimeout>;
	let seeSubtitles = true;
	let seeFullscreen = false;
	let seeVolumeSlider = false;
	let seeControls = true;

	$: if($player.time >= video.length && !paused) {
		paused = true
	}

	function hideControls() {
		seeControls = false;
	}

	function showControls() {
		clearTimeout(timeout);
		seeControls = true;

		if (!paused) {
			timeout = setTimeout(hideControls, 3000);
		}
	}

	function unhideVolumeSlider() {
		seeVolumeSlider = true;
	}

	function hideVolumeSlider() {
		seeVolumeSlider = false;
	}

	function toggleFullscreen() {
		if (playerDiv) {
			if (seeFullscreen) {
				document.exitFullscreen();
			} else {
				playerDiv.requestFullscreen();
			}
		}
		seeFullscreen = !seeFullscreen;
	}

	function togglePause() {
		paused = !paused;

		if (!paused) {
			showControls();
		}
	}
</script>

<div class="player" class:clear={!seeControls}
	 on:mousemove={showControls}
	 bind:this={playerDiv}
	 role="none">

	<img src="ex.jpg" alt="thumb" class="thumb">
	<div class="control" class:visible={seeControls} role="none" on:mouseleave={hideVolumeSlider}>
		<TrackBar video={video} paused={paused}/>
		<div class="menu">
			<div class="container">
				<div class="item play" id="play" role="none" on:click={togglePause}>
					<Icon name={paused ? "play_arrow" : "pause"} size={28} color="var(--white-opaque)"/>
				</div>

				<div class="item volume" on:mousemove={unhideVolumeSlider} role="none">
					<VolumeSlider bind:volume expanded={seeVolumeSlider}/>
				</div>

				<div class="item time">
					<span class="container">{formatTime($player.time)}</span>
					<span class="container length">{formatTime(video.length)}</span>
				</div>
			</div>

			<div class="container">
				<div class="item speed">
					<Icon name="fast_forward" size={30} color="var(--white-opaque)"/>
				</div>
				<div class="item subtitles" class:inactive={!seeSubtitles}
					 on:click={() => seeSubtitles = !seeSubtitles} role="none">
					<Icon name="match_case" size={32} color="var(--white-opaque)"/>
				</div>
				<div class="item expand" on:click={toggleFullscreen} role="none">
					<Icon color="var(--white-opaque)"
						  name={seeFullscreen ? "close_fullscreen" : "open_in_full"} />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.player {
		overflow: hidden;
		border-radius: 4px;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--primary-dark);
		position: relative;

		&.clear {
			cursor: none;
		}

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
			opacity: 0;
			transition: opacity 400ms;
			pointer-events: none;

			&.visible {
				pointer-events: all;
				opacity: 1;
			}

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
