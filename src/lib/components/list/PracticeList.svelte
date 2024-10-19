<script lang="ts">
	import Title from "$lib/components/Title.svelte";
	import type {Chapter} from "$lib/types";
	export let chapter: Chapter;
</script>

<div class="wrapper">
	<Title>Exercícios</Title>
	<div class="exercises">
		{#each chapter.videos as lesson}
			<div class="square header">{lesson.tag}</div>
			{#each Array(20) as _, i}
				<div class="square exercise">{lesson.tag}{i + 1}</div>
			{/each}
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;

		.exercises {
			display: grid;
			grid-gap: 8px;
			grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));

			.square {
				width: 100%;
				aspect-ratio: 1 / 1;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 10%;
				font-size: 1.3rem;
				user-select: none;

				&.exercise {
					border: var(--primary-dark) 1px solid;
					transition: background-color 200ms;
					cursor: pointer;

					&:hover {
						background: var(--black-translucid);
					}
				}

				&.header {
					background: var(--primary-dark);
					font-size: 1.6rem;
					font-weight: bolder;
				}
			}
		}
	}
</style>