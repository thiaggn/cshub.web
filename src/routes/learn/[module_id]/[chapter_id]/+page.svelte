<script lang="ts">
	import ChapterList from "$lib/components/list/ChapterList.svelte";
	import {quadOut} from "svelte/easing";
	import {fly} from "svelte/transition";
	import PracticeList from "$lib/components/list/PracticeList.svelte";
	import VideoList from "$lib/components/list/VideoList.svelte";
	import NotFound from "$lib/components/NotFound.svelte";
	export let data;

	let chapterView: HTMLDivElement;

	$: if(data.chapter) {
		if(chapterView) {
			chapterView.scrollTo({
				top: 0,
				behavior: "instant"
			})
		}
	}
</script>

<div class="module" in:fly={{x: 8, duration: 300, easing: quadOut}}>
	<div class="side">
		<ChapterList module={data.module}/>
	</div>

	<div class="main" bind:this={chapterView}>
		{#if data.chapter.videos.length === 0}
			<NotFound>
				O criador não fez upload de aulas para <span>{data.chapter.title}</span>
			</NotFound>
		{:else}
			<VideoList chapter={data.chapter}/>
			<br/>
			<PracticeList chapter={data.chapter}/>
		{/if}
	</div>
</div>


<style lang="scss">
	.module {
		height: 100%;
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 12px;

		.side {
			padding-top: 24px;
			flex-shrink: 0;
			border-right: 1px solid var(--dark);
			width: 300px;
			height: 100%;
			overflow: hidden;
		}

		.main {
			padding-top: 24px;
			width: 100%;
			padding-bottom: 32px;
			padding-right: 32px;
			height: 100%;
			overflow-y: scroll;

			span {
				color: var(--primary-light);
			}
		}
	}
</style>