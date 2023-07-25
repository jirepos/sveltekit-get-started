<script>
	let key;
	let keyCode;

  // window event handler 
	function handleKeydown(event) {
		key = event.key;
		keyCode = event.keyCode;
	}
</script>

<h3>&lt;svelte:window&gt;</h3>
<p>
  요소를 사용하면 구성 요소가 소멸될 때 이벤트 리스너를 제거하거나 서버 측 렌더링 시 
  window의 존재를 확인하는 것에 대해 걱정할 필요 없이 창 객체에 이벤트 리스너를 추가할 수 있습니다.
</p>
<svelte:window on:keydown={handleKeydown} />

<div style="text-align: center">
	{#if key}
		<kbd>{key === ' ' ? 'Space' : key}</kbd>
		<p>{keyCode}</p>
	{:else}
		<p>Focus this window and press any key</p>
	{/if}
</div>

<style>
	div {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	kbd {
		border-radius: 4px;
		font-size: 6em;
		padding: 0.2em 0.5em;
		background-color: #eeeeee;
		border-top: 5px solid #f9f9f9;
		border-left: 5px solid #f9f9f9;
		border-right: 5px solid #aaaaaa;
		border-bottom: 5px solid #aaaaaa;
		color: #555;
	}
</style>
