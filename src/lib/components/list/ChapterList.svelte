<script lang="ts">
	import {page} from "$app/stores";
	import type {Module} from "$lib/types";
	import Title from "$lib/components/Title.svelte";

	export let module: Module;

	let scrollbarHidden = true;

	$: routeMatches = function routeMatches(chapterRoute: string) {
		const regex = new RegExp(`^\\/learn\\/[^\\/]+\\/${chapterRoute}$`)
		return regex.test($page.url.pathname)
	}

</script>

<Title icon={module.icon}>{module.title}</Title>
<div class="chapters minscroll" class:scrollbarHidden
	 role="none"
	 on:mouseleave={() => scrollbarHidden = true}
	 on:mouseenter={()=> scrollbarHidden = false}>

	{#each module.chapters as chapter, i}
		<a class="chapter" class:active={routeMatches(chapter.id)} href="/learn/{module.id}/{chapter.id}">
			<div class="index">{i + 1}</div>
			<div class="title">{chapter.title}</div>
		</a>
	{/each}
</div>

<style lang="scss">

	.chapters {
		height: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		user-select: none;
		padding-bottom: 48px;
		padding-right: 12px;


		.chapter {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			gap: 16px;
			height: 48px;
			padding: 0 8px;
			color: var(--white-opaque);
			transition: color 200ms, border-bottom-color 200ms;
			cursor: pointer;

			&.active {
				color: var(--primary);
			}

			&:not(.active):hover {
				color: var(--primary-lighter);
			}

			&:not(:last-of-type) {
				border-bottom: 1px solid var(--gray-dark);
			}

			.index {
				font-family: sans-serif;
				font-size: 1.4rem;
				font-weight: 700;
			}
		}
	}
</style>