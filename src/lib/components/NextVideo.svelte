<script lang="ts">
	import {formatTime} from "$lib/utils.js";
	import type {Video} from "$lib/types";
	export let video: Video;
</script>

<div class="next">
	<div class="title">Próximo vídeo</div>
	{#if video.next !== undefined}
		<a class="container" href="/watch/{video.next.id}">
			<div class="thumb">
			</div>
			<div class="wrapper">
				<div class="title">{video.next.title}</div>
				<div class="length">{formatTime(video.next.length)}</div>
			</div>
		</a>
	{:else}
		<div class="container empty">
			<div class="warn">Esse é o último vídeo do capítulo.</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.next {
		display: flex;
		flex-direction: column;
		gap: 8px;

		.container {
			overflow: hidden;
			display: flex;
			border-radius: 4px;
			height: 86px;
			border: 1px solid var(--gray-dark);
			color: var(--gray-lighter);
			transition: 200ms;

			&.empty {
				justify-content: center;
				padding: 16px;
				display: flex;
				align-items: center;
			}

			&:hover {
				.wrapper .title {
					color: var(--white-opaque);
				}
			}

			.wrapper {
				padding: 10px;
				width: 100%;

				.title {
					transition: 200ms;
					font-size: 1.4rem;
					margin-bottom: 8px;
				}

				.length {
					width: fit-content;
					padding: 2px 4px;
					border-radius: 2px;
					font-size: 1.2rem;
					bottom: 4px;
					right: 4px;
					background: var(--purple-translucid);
				}

			}

			.thumb {
				height: 100%;
				aspect-ratio: 16 / 9;
				position: relative;
				background: black;
			}
		}

	}
</style>