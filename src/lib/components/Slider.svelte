<script lang="ts">
	import {onMount} from "svelte";

	let input: HTMLInputElement;
	const activeColor = "var(--white)";
	const inactiveColor = "var(--white-weak)";

	export let value = 70;

	onMount(handleInput)

	$: value = value

	function handleInput() {
		if(input) {
			let value = parseFloat(input.value)
			let min = parseFloat(input.min)
			let max = parseFloat(input.max)

			const ratio = (value - min) / (max - min) * 100;
			input.style.background = `linear-gradient(90deg, ${activeColor} ${ratio}%, ${inactiveColor} ${ratio}%)`;
		}
	}
</script>

<input type="range"
	   name="range"
	   bind:value={value}
	   min="0" max="100"
	   id="inputRange"
	   class="inputRange"
	   bind:this={input}
	   on:input={handleInput} />

<style>
	.inputRange {
		appearance: none;
		width: 50px;
		height: 3px;
		border-radius: 9999px;
		background: linear-gradient(90deg, #ffffff 70%, #ffffff3d 70%);
		cursor: pointer;
	}

	/* Thumb: for Chrome, Safari, Edge */
	.inputRange::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 12px;
		height: 12px;
		border-radius: 144px;
		background: #ffffff;
		box-shadow: none;
	}

	/* Thumb: for Firefox */
	.inputRange::-moz-range-thumb {
		border: none;
		width: 12px;
		height: 12px;
		border-radius: 144px;
		background: #ffffff;
		box-shadow: none;
	}
</style>