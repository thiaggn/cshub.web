<script lang="ts">
	import type {Part, Video} from "$lib/types";
	import TrackPart from "$lib/components/player/TrackPart.svelte";
	import {scale} from "svelte/transition";
	import {onDestroy} from "svelte";
	import {player} from "$lib/stores/player";

	export let video: Video;
	export let paused: boolean;

	$: aim = 0;
	$: watched = $player.time / video.length;

	let trackbar: HTMLDivElement;
	let dragging = false;
	let expandBullet = false;
	let bulletVisible = false;


	$: for (let p of video.parts) {
		const active = $player.time >= p.start && $player.time <= p.end;

		if (active && $player.part != p) {
			$player.part = p;
			break;
		}

		// Verificar se o aim está dentro do intervalo ativo
		expandBullet = aim >= p.start && aim <= p.end;
	}


	let interval = setInterval(function updateTime() {
		if (!paused && !dragging && $player.time < video.length) {
			$player.time += 1;
		}
	}, 1000)

	onDestroy(function stopTimer() {
		clearInterval(interval)
	})


	function updateAim(event: MouseEvent) {
		const rect = trackbar.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;

		aim = Math.trunc((mouseX / rect.width) * video.length);

		if (dragging) {
			$player.time = aim;
		}
	}

	function updateTime(event: MouseEvent) {
		const rect = trackbar.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;

		$player.time = Math.trunc((mouseX / rect.width) * video.length);
	}

	function handleMouseDown(event: MouseEvent) {
		dragging = true;
		updateTime(event);
	}

	function handleMouseLeave() {
		bulletVisible = false
		aim = 0
	}

	function handleMouseEnter() {
		bulletVisible = true
	}

	function handleMouseUp() {
		dragging = false;
	}
</script>

<svelte:window on:mouseup={handleMouseUp}/>

<div class="wrapper" style:--watched={watched}>
	<div class="trackbar"
		 bind:this={trackbar}
		 on:mousemove={updateAim}
		 on:mousedown={handleMouseDown}
		 on:mouseenter={handleMouseEnter}
		 on:mouseleave={handleMouseLeave}
		 role="none">
		{#each video.parts as part}
			<TrackPart part={part} videoLength={video.length} aim={aim}/>
		{/each}
	</div>
	<div class="bullettrack">
		<div class="bullet" class:expanded={expandBullet} transition:scale></div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
		height: 20px;
		display: flex;
		align-items: flex-end;
		cursor: pointer;

		.trackbar {
			height: 18px;
			display: flex;
			gap: 3px;
			position: absolute;
			width: 100%;
			user-select: none;
			align-items: flex-end;
		}

		.bullettrack {
			height: 8px;
			width: 100%;
			display: flex;
			align-items: center;

			.bullet {
				transform: translateX(-50%);
				position: absolute;
				left: calc(var(--watched) * 100%);
				z-index: 3;
				border-radius: 100%;
				height: 10px;
				aspect-ratio: 1 / 1;
				background: var(--primary-saturated);
				pointer-events: none;
				transition: height 200ms;

				&.expanded {
					height: 16px;
				}
			}
		}
	}
</style>
