<script lang="ts">
	import type {Part} from "$lib/types";

	export let time: number;
	export let aim: number;
	export let videoLength: number;
	export let part: Part;

	let duration = part.end - part.start;
	let size = duration / videoLength;

	$: watched = (time >= part.start && time <= part.end)
			? (time - part.start) / duration
			: (time > part.end) ? 1 : 0;

	$: aimed = (aim >= part.start && aim <= part.end)
			? (aim - part.start) / duration
			: (aim > part.end) ? 1 : 0;

	$: active = watched > 0 && watched < 1;
</script>


<div class="wrapper" style:--size={size}>
	<div class="part">
		<div class="line aim" style:--aimed={aimed}></div>
		<div class="line watched" style:--watched={watched}>
			{#if active}
				<div class="bullet"></div>
			{/if}
		</div>
		<div class="gap"></div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		align-items: flex-end;
		height: 100%;
		width: calc(var(--size) * 100%);
		cursor: pointer;
		padding-bottom: 3px;

		&:hover {
			.part {
				height: 9px;
				transform: translateY(3px);

				.line.watched .bullet {
					height: 18px;
				}
			}
		}

		&:last-of-type .gap {
			display: none;
		}

		.part {
			width: 100%;
			height: 3px;
			background: var(--white-weak);
			transition: 150ms;
			position: relative;

			.line {
				height: 100%;
				position: absolute;

				&.watched {
					width: calc(100% * var(--watched));
					background: var(--primary-saturated);
					display: flex;
					justify-content: flex-end;
					align-items: center;

					.bullet {
						transition: 200ms;
						transform: translateX(50%);
						z-index: 3;
						border-radius: 100%;
						height: 12px;
						aspect-ratio:  1 / 1;
						background: var(--primary-saturated);
					}
				}

				&.aim {
					background: var(--white-weak);
					width: calc(100% * var(--aimed));
				}
			}

			.gap {
				position: absolute;
				height: 100%;
				width: 3px;
				right: -3px;
			}
		}
	}
</style>