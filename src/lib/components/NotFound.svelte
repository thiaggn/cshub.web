<div class="empty">
	<div class="message">Nada por aqui</div>
	<div class="description">
		<slot/>
	</div>
</div>

<style lang="scss">
	.empty {
		margin-top: 128px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		justify-content: center;

		.message {
			font-size: 3rem;
			font-family: Expose, sans-serif;
			font-weight: 700;
		}
	}
</style>