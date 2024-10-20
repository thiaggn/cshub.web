<script>
	import "../global.css";
	import TopBar from "$lib/components/TopBar.svelte";
	import NavBar from "$lib/components/NavBar.svelte";
	import {sidebar} from "$lib/stores/sidebar";
	$: expanded = $sidebar.expanded && !$sidebar.forceMinimize
</script>

<div class="app" class:expanded>
	<div class="topbar">
		<TopBar/>
	</div>
	<div class="wrapper" >
		<div class="sidebar">
			<NavBar/>
		</div>
		<div class="view">
			<slot/>
		</div>
	</div>
</div>

<style lang="scss">
	.app {
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr;


		&:not(.expanded) {
			.wrapper {
				grid-template-columns: 56px 1fr;

				.sidebar {
					border-color: transparent;
				}
			}
		}

		.wrapper {
			display: grid;
			padding-left: 12px;
			height: 100%;
			grid-template-columns: 180px 1fr;
			grid-template-rows: 1fr;
			min-height: 0;
			min-width: 0;

			.sidebar {
				padding-top: 12px;
				padding-right: 12px;
				border-right: 1px solid var(--gray-dark);
			}

			.view {
				min-height: 0;
				min-width: 0;
				position: relative;
				overflow: hidden;
			}
		}
	}
</style>