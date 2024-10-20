<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import SearchEverywhereBar from "$lib/components/SearchEverywhereBar.svelte";
	import {sidebar} from "$lib/stores/sidebar";

	function toggleSidebar() {
		$sidebar.expanded = !$sidebar.expanded
	}
</script>

<div class="topbar">
	<div class="side">
		<div class="expand" class:inactive={$sidebar.forceMinimize} on:click={toggleSidebar} role="none">
			<div class="circ">
				<Icon name="menu" size={24}/>
			</div>
		</div>
		<div class="branding" role="none">
			<Icon name="deployed_code" size={24} color="var(--primary)"/>
			<div class="text">cshub</div>
		</div>
	</div>

	<SearchEverywhereBar/>

	<div class="nav">
		<div class="navitem">
			<Icon weight={300} size={28} name="inbox"/>
		</div>
		<div class="navitem">
			<Icon weight={300} size={28} name="person"/>
		</div>
		<div class="navitem logout">
			<Icon weight={300} size={28} name="logout"/>
		</div>
	</div>
</div>

<style lang="scss">
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		border-bottom: 1px solid transparent;
		border-bottom-color: var(--gray-dark);


		.side {
			height: 100%;
			max-width: 240px;
			width: 100%;
			display: flex;
			align-items: center;
			margin-right: 20px;

			.expand {
				cursor: pointer;
				height: 100%;
				width: fit-content;
				margin: 0 12px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: 200ms;

				&.inactive {
					cursor: default;
					filter: brightness(0.5);
				}


				&:hover {
					.circ {
						background-color: var(--gray-dark)
					}
				}

				.circ {
					padding: 8px;
					transition: 400ms;
					aspect-ratio: 1 / 1;
					border-radius: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}

			.branding {
				user-select: none;
				height: 100%;
				display: flex;
				align-items: center;

				.text {
					color: var(--white-opaque);
					font-family: Expose, sans-serif;
					font-weight: 700;
					font-size: 24px;
				}
			}
		}

		.nav {
			max-width: 240px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 16px;
			height: 100%;

			.navitem {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 4px;
				height: 40px;
				aspect-ratio: 1 /1;
				transition: 200ms;
				border: 1px solid transparent;

				&:hover {
					border-color: var(--black-lighter);
				}
			}
		}
	}
</style>