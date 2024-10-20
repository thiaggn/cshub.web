<script lang="ts">
	import type {Video} from "$lib/types";
	import TrackPart from "$lib/components/TrackPart.svelte";

	export let video: Video;
	export let time = video.length / 2;

	$: aim = 0;
	let dragging = false;
	let trackbar: HTMLDivElement;

	function startDragging(event: MouseEvent) {
		dragging = true;
		updateTime(event);
	}

	function stopDragging() {
		dragging = false;
	}

	function updateAim(event: MouseEvent) {
		const rect = trackbar.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;

		aim = Math.trunc(Math.max(0, Math.min((mouseX / rect.width) * video.length, video.length)));

		if (dragging) {
			time = aim;
		}
	}

	function updateTime(event: MouseEvent) {
		const rect = trackbar.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;

		time = Math.trunc(Math.max(0, Math.min((mouseX / rect.width) * video.length, video.length)));
	}
</script>

<svelte:window
		on:mousemove={dragging ? updateAim : null}
		on:mouseup={stopDragging}
		on:mouseleave={stopDragging} />

<div class="trackbar"
	 bind:this={trackbar}
	 on:mousedown={startDragging}
	 role="none">
	{#each video.parts as part}
		<TrackPart part={part} time={time} videoLength={video.length} aim={aim}/>
	{/each}
</div>

<style lang="scss">
	.trackbar {
		display: flex;
		gap: 3px;
		position: relative;
		height: 18px;
		width: 100%;
		cursor: pointer;
		user-select: none;
	}
</style>
