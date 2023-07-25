<script lang="ts">
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
<!-- 일부 마크업을 조건부로 렌더링하기 위해 if 블록으로 래핑합니다. 카운트가 10보다 클 때 나타나는 텍스트를 추가해 보겠습니다. -->
{#if count > 10}
	<p>{count} is greater than 10</p>
{/if}