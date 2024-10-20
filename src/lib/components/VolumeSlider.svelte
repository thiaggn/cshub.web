<script lang="ts">
	import {cubicOut} from "svelte/easing";
	import Slider from "$lib/components/Slider.svelte";
	import {slide} from "svelte/transition";
	import Icon from "$lib/components/Icon.svelte";

	export let value: number = 70;
	export let expanded: boolean = false;
	let muted = false;

	function handleClick() {
		if(value == 0) {
			value = 50
			muted = false
		}
		else muted = !muted
	}
</script>


<div class="volume" role="none">
	<div class="ico" class:offset={value < 50 && value !== 0} on:click={handleClick} role="none">
		<Icon name={value > 0 ? (value < 50 ? "volume_down_alt" : "volume_up") : "volume_off"}
			  size={24} color="var(--white-opaque)"/>
	</div>
	{#if expanded}
		<div class="slider" transition:slide={{duration: 400, easing: cubicOut, axis: 'x'}}>
			{#if muted}
				<Slider value={0}/>
			{:else}
				<Slider bind:value={value}/>
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