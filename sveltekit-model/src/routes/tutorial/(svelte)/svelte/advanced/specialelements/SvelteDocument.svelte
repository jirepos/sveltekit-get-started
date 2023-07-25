<script lang="ts">

	let selection:string = '';

	const handleSelectionChange = (e) => {
		selection = document.getSelection()?.toString() || '';
	} 
</script>

<h2>&lt;svelte:document&gt;</h2>
<p>
	문서의 이벤트(예: 창에서 실행되지 않는 이벤트)에 리스너를 추가할 수 있습니다.
</p>
<svelte:document on:selectionchange={handleSelectionChange} />

<h1>Select this text to fire events</h1>
<p>Selection: {selection}</p>
