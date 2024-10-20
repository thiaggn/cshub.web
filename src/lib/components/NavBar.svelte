<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import {page} from "$app/stores";
	import {slide} from "svelte/transition";
	import {backOut, cubicOut} from "svelte/easing";
	import {sidebar} from "$lib/stores/sidebar";
	import {destinations} from "$lib/constants";

	let allowGoBack = true;
	$: expanded = !$sidebar.forceMinimize && $sidebar.expanded;

	$: {
		$sidebar.forceMinimize = $page.url.pathname.startsWith("/watch")
	}


	$: {
		let atBaseRoute = false;

		for(const dest of destinations) {
			if($page.url.pathname == dest.to) {
				allowGoBack = false;
				atBaseRoute = true
			}
		}

		allowGoBack = !atBaseRoute

	}
</script>

<div class="navbar" class:expanded>
	{#if allowGoBack}
		<div class="goback item" on:click={() => history.back()} role="none"
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
		<a href={dest.to} class="dest item" class:active>
			<div class="icon">
				<Icon name={dest.icon}
					  color="var(--primary)"
					  fill={active ? 1 : 0}
					  weight={300}
					  transition={300}
				/>
			</div>

			{#if expanded}
				<div class="label">{dest.label}</div>
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


		.item {
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

				.icon {
					transform: translateX(-3px);
					transition: 200ms ease-out;
				}

				&:hover {
					background: var(--gray-dark);

					.icon {
						transform: translateX(-6px);
					}
				}
			}

			&.dest {
				&.active {
					background: var(--gray-dark);
				}

				&:not(.active):hover {
					background: var(--white-translucid);
				}

			}
		}

	}
</style>
