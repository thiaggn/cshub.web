<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import {page} from "$app/stores";
	import {destinations, steps, trajectory} from "$lib/stores/steps";
	import {slide} from "svelte/transition";
	import {fade} from "svelte/transition";
	import {backOut, cubicOut} from "svelte/easing";
	import {onMount} from "svelte";
	import {sidebar} from "$lib/stores/sidebar";

	$: expanded = !$sidebar.forceMinimize && $sidebar.expanded;

	$: {
		let atRootView = destinations.find(d => d.to == $page.url.pathname)
		if (atRootView) {
			trajectory.clear()
		}

		$sidebar.forceMinimize = $page.url.pathname.startsWith("/watch")
	}

	onMount(function () {
		let atRootView = destinations.find(dest => dest.to === $page.url.pathname)

		if (!atRootView) {
			trajectory.push("/learn")
		}
	})
</script>

<div class="navbar" class:expanded>
	{#if $steps > 0}
		<div class="goback button" on:click={trajectory.back} role="none"
			 transition:slide={ {duration: 500, easing: backOut, axis: "y"}}>
			<div class="icon">
				<Icon name="chevron_left" size={32}/>
			</div>
			{#if expanded}
				<span>Voltar</span>
			{/if}
		</div>
	{/if}

	{#each destinations as dest, i}
		{@const active = $page.url.pathname === dest.to}
		<a href={dest.to} class="dest button" class:active>
			<div class="icon">
				<Icon name={dest.icon}
					  color="var(--primary)"
					  fill={active ? 1 : 0}
					  weight={300}
					  transition={300}
				/>
			</div>

			{#if expanded}
				<div class="label" transition:fade={{duration: 200, easing: cubicOut}} >{dest.label}</div>
			{/if}
		</a>
	{/each}
</div>

<style lang="scss">
	.navbar {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		gap: 4px;


		.button {
			height: 45px;
			display: flex;
			width: 100%;
			border-radius: 4px;
			align-items: center;
			color: var(--white);
			transition: background-color 200ms;
			cursor: pointer;
			padding: 0 10px;
			gap: 20px;

			&.goback {
				gap: 14px;
				transform: translateX(-3px);

				.icon {
					transition: 200ms ease-out;
				}

				&:hover {
					background: var(--gray-darker);

					.icon {
						transform: translateX(-6px);
					}
				}
			}

			&.dest {
				&.active {
					background: var(--gray-darker);
				}

				&:not(.active):hover {
					background: var(--white-translucid);
				}

			}
		}

	}
</style>
