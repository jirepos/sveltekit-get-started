<script>
	// import { marked } from 'marked';
	let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;
</script>

<p>textarea 요소는 Svelte의 텍스트 입력과 유사하게 동작합니다. bind:value를 사용하세요.</p>

<div class="grid">
	input
	<textarea bind:value></textarea>

	output
	<div>{value}</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>
