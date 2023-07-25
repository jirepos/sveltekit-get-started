<script>
	let yes = false;
</script>

<p>확인란은 상태를 전환하는 데 사용됩니다. input.value에 바인딩하는 대신 input.checked에 바인딩합니다.</p>

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>
		Thank you. We will bombard your inbox and sell
		your personal details.
	</p>
{:else}
	<p>
		You must opt in to continue. If you're not
		paying, you're the product.
	</p>
{/if}

<button disabled={!yes}>Subscribe</button>
