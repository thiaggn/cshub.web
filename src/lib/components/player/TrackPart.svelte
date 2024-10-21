<script lang="ts">
	import type {Part} from "$lib/types";
	import {player} from "$lib/stores/player";

	export let aim: number;
	export let videoLength: number;
	export let part: Part;

	$: duration = part.end - part.start;
	$: size = duration / videoLength;

	$: watched = ($player.time >= part.start && $player.time <= part.end)
			? ($player.time - part.start) / duration
			: ($player.time > part.end) ? 1 : 0;

	$: aimed = (aim >= part.start && aim <= part.end)
			? (aim - part.start) / duration
			: (aim > part.end) ? 1 : 0;

</script>

<div class="wrapper" style:--size={size}>
	<div class="subwrapper">
		<div class="part"  style:--watched={watched} style:--aimed={aimed}>
			<div class="line aim"></div>
			<div class="line watched"></div>
			<div class="gap"></div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		align-items: flex-end;
		height: 100%;
		width: calc(var(--size) * 100%);
		cursor: pointer;

		.subwrapper {
			height: 8px;
			width: 100%;
			display: flex;
			align-items: center;
		}

		&:hover {
			.part {
				height: 8px;
			}
		}

		&:last-of-type .gap {
			display: none;
		}

		.part {
			width: 100%;
			height: 3px;
			background: var(--white-weak);
			transition: 200ms;
			position: relative;

			.line {
				height: 100%;
				position: absolute;
				left: 0;

				&.watched {
					width: calc(100% * var(--watched));
					background: var(--primary-saturated);
					display: flex;
					justify-content: flex-end;
					align-items: center;
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

			}
		}
	}
</style>