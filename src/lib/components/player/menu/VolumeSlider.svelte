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

	function handleMouseEnter() {
		expanded = true
		console.log('entered')
	}
</script>


<div class="volume" on:mouseenter={handleMouseEnter} role="none">
	<div class="slider" role="none">
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
</div>

<style lang="scss">

	.volume {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 0 0 8px;

		.slider {
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
	}

</style>