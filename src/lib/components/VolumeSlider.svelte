<script lang="ts">
	import {cubicOut} from "svelte/easing";
	import Slider from "$lib/components/Slider.svelte";
	import {slide} from "svelte/transition";
	import Icon from "$lib/components/Icon.svelte";

	export let volume: number = 70;
	export let expanded: boolean;
	let muted = false;


	function handleClick() {
		if(volume == 0) {
			volume = 50
			muted = false
		}
		else muted = !muted
	}
</script>


<div class="volume" role="none">
	<div class="ico" class:offset={volume < 50 && volume !== 0} on:click={handleClick} role="none">
		<Icon name={volume > 0 ? (volume < 50 ? "volume_down_alt" : "volume_up") : "volume_off"}
			  size={24} color="var(--white-opaque)"/>
	</div>
	{#if expanded}
		<div class="slider" transition:slide={{duration: 400, easing: cubicOut, axis: 'x'}}>
			{#if muted}
				<Slider value={0}/>
			{:else}
				<Slider bind:value={volume}/>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.volume {
		display: flex;
		height: 100%;

		.ico {
			display: flex;
			align-items: center;
			margin-right: 8px;

			&.offset {
				transform: translateX(-2px);
			}
		}

		.slider {
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>