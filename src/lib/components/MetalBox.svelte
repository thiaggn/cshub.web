<script lang="ts">
	let box: HTMLElement;

	function handleMouseMove(e: MouseEvent) {
		if(box) {
			const rect = box.getBoundingClientRect();
			box.style.setProperty("--x", e.clientY - rect.top + 'px');
			box.style.setProperty("--y", e.clientX - rect.left + 'px');
		}
	}

</script>

<div class="box" bind:this={box} on:mousemove={handleMouseMove} role="presentation">
	<div class="wrapper">
		<slot/>
	</div>
</div>

<style lang="scss">
	.box {
		background: var(--gray-dark);
		border-radius: 2px;
		position: relative;
		overflow: hidden;

		&::before {
			content: "";
			top: var(--x);
			left: var(--y);
			position: absolute;
			transform: translate(-50%, -50%);
			height: 300px;
			width: 300px;
			background: radial-gradient(circle, var(--gray-lighter), transparent, transparent);
			opacity: 0;
			transition: opacity 200ms;
		}

		&:hover::before {
			opacity: 1;
		}

		.wrapper {
			position: relative;
			background: var(--purple-translucid);
			border-radius: 1px;
			overflow: hidden;
			margin: 1px;
		}
	}
</style>