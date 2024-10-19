<script>

import Icon from "$lib/components/Icon.svelte";
</script>

<div class="search">
	<Icon name="search" weight={300} color="var(--gray-lighter)"/>
	<input placeholder="Procurar em todo o lugar"/>
</div>

<style lang="scss">
	.search {
		align-self: center;
		display: flex;
		align-items: center;
		background: var(--black-opaque);
		border: 1px solid var(--gray);
		height: 40px;
		border-radius: 8px;
		padding-left: 12px;
		gap: 8px;
		max-width: 600px;
		overflow: hidden;
		width: 100%;

		input {
			border: none;
			background: transparent;
			font-family: sans-serif;
			height: 100%;
			width: 100%;

			&:active, &:focus {
				outline: none;
				color: var(--white-opaque);
			}
		}
	}
</style>