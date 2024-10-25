<script lang="ts">
	import {player} from "$lib/stores/player";
	import {Velocity, type Video} from "$lib/types";
	import VolumeSlider from "$lib/components/player/menu/VolumeSlider.svelte";
	import PauseToggleButton from "$lib/components/player/menu/PauseToggleButton.svelte";
	import Timestamp from "$lib/components/player/menu/Timestamp.svelte";
	import VelocityMenu from "$lib/components/player/menu/VelocityMenu.svelte";
	import SubtitleToggleButton from "$lib/components/player/menu/SubtitleToggleButton.svelte";
	import FullscreenToggleButton from "$lib/components/player/menu/FullscreenToggleButton.svelte";
	import TrackBar from "$lib/components/player/trackbar/TrackBar.svelte";
	import Subtitles from "$lib/components/player/Subtitles.svelte";
	import {slide} from "svelte/transition";
	import {cubicOut} from "svelte/easing";
	import {onMount} from "svelte";

	export let video: Video;

	let playerDiv: HTMLDivElement;
	let timeout: ReturnType<typeof setTimeout>;
	let videoElement: HTMLVideoElement;

	let volume: number;
	let velocity: number = Velocity.Normal;

	let paused = true;
	let seeFullscreen: boolean;
	let seeVolumeSlider = false;
	let seeSubtitles = true;
	let seeControls = true;

	$: if ($player.time >= video.length && !paused) {
		paused = true
	}

	$: if (videoElement) {
		if (!paused) videoElement.play()
		else videoElement.pause()
	}

	function hideControls() {
		if (!paused) seeControls = false;
	}

	function showControls() {
		clearTimeout(timeout);
		seeControls = true;

		if (!paused) {
			timeout = setTimeout(hideControls, 3000);
		}
	}

	function hideVolumeSlider() {
		seeVolumeSlider = false;
	}

	function toggleFullscreen(isFullscreen: boolean) {
		if (playerDiv) {
			if (isFullscreen) {
				document.exitFullscreen();
			} else {
				playerDiv.requestFullscreen();
			}
		}
	}

	function handleFullscreenToggle(e: CustomEvent) {
		toggleFullscreen(e.detail.fullscreen)
	}

	function togglePause() {
		paused = !paused;

		if (!paused) {
			showControls();
		}
	}

	let clickTimeout: number | null = null;
	let clickCount = 0;

	function handleClick() {
		clickCount++;

		if (clickTimeout !== null) {
			clearTimeout(clickTimeout);
		}

		clickTimeout = setTimeout(() => {
			if (clickCount === 1) {
				togglePause();
			} else if (clickCount === 2) {
				toggleFullscreen(seeFullscreen)
				seeFullscreen = !seeFullscreen
			}

			clickCount = 0;
		}, 250);
	}

	let prev = 0;
	function render(current: number) {
		if(!paused) {
			$player.time += (current - prev) / 1000;
		}

		prev = current;
		requestAnimationFrame(render)
	}

	let renderHandle: number;

	onMount(function startRendering() {
		renderHandle = window.requestAnimationFrame(render)

		return () => {
			cancelAnimationFrame(renderHandle)
		}
	})
</script>

<div class="player" class:clear={!seeControls}
	 bind:this={playerDiv} role="none"
	 on:mousemove={showControls}
	 on:mouseleave={hideControls}
>
	<div class="view" on:click={handleClick} role="none"></div>

	<div class="inferior">
		{#if seeSubtitles}
			<div class="subtitles" class:padded={!seeControls}
			transition:slide={{duration: 200, easing: cubicOut}}>
				<Subtitles/>
			</div>
		{/if}
		<div class="control" class:visible={seeControls} role="none" on:mouseleave={hideVolumeSlider}>
			<TrackBar video={video}/>
			<div class="menu">
				<div class="container">
					<PauseToggleButton bind:paused/>
					<VolumeSlider bind:volume bind:expanded={seeVolumeSlider}/>
					<Timestamp length={video.length} time={$player.time}/>
				</div>

				<div class="container">
					<VelocityMenu bind:velocity/>
					<SubtitleToggleButton bind:active={seeSubtitles}/>
					<FullscreenToggleButton on:toggle={handleFullscreenToggle} bind:fullscreen={seeFullscreen}/>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.player {
		user-select: none;
		border: 1px solid rgba(255, 255, 255, 0);
		overflow: hidden;
		border-radius: 4px;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--primary-dark);
		position: relative;

		&.clear {
			cursor: none;
		}

		.view {
			background: #151a15;
			height: 100%;
			width: 100%;
		}

		.inferior {
			width: 100%;
			position: absolute;
			bottom: 0;

			.subtitles {
				width: 100%;

				&.padded {
					transform: translateY(-32px);
				}
			}

			.control {
				display: flex;
				flex-direction: column;
				padding: 0 12px;
				width: 100%;
				background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 25%, transparent);
				opacity: 0;
				transition: opacity 400ms;
				pointer-events: none;
				height: 0;


				&.visible {
					height: 100%;
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
					}
				}
			}

		}

	}
</style>
