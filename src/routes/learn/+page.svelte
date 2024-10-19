<script>
	// Components
	import MetalBox from "$lib/components/MetalBox.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";
	import {trajectory} from "$lib/stores/steps";
	import Title from "$lib/components/Title.svelte";

	export let data;
</script>

<div class="learn" in:fly={{x: 8, duration: 300, easing: quadOut}}>
	{#each data.summaries as summary}
		<div class="category">
			<div class="title">{summary.title}</div>
			<div class="modules">
				{#each summary.modules as module}
					<MetalBox>
						<a class="module"
						   href="learn/{module.id}/{module.startChapter}"
						   on:click={() => trajectory.push("/learn")}>
							<Icon name={module.icon}/>
							<div class="title">{module.title}</div>
						</a>
					</MetalBox>
				{/each}
			</div>
		</div>
	{/each}
</div>


<style lang="scss">
	.learn {
		display: flex;
		flex-direction: column;
		gap: 24px;
		overflow-y: scroll;
		height: 100%;
		width: 100%;
		padding: 12px 32px 100px 12px;

		.category {
			> .title {
				font-weight: 600;
				font-size: 1.6rem;
				display: flex;
				padding-bottom: 12px;
				align-items: center;
				color: var(--white-opaque);
			}

			.modules {
				display: grid;
				grid-gap: 8px;
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

				.module {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: 120px;
					padding: 8px;
					transition: 300ms;

					> .title {
						color: var(--white-opaque);
						font-size: 1.3rem;
					}

					&:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
</style>