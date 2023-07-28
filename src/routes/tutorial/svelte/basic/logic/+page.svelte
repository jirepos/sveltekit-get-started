<script lang="ts">
	import IfBlocks from './IfBlocks.svelte';
	import ElseBlock from './ElseBlock.svelte';
	import ElseIfBlock from './ElseIfBlock.svelte';
	import EachBlock from './EachBlock.svelte';

	import KeyedEachBlock from './KeyedEachBlock.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
    // 첫번째 요소 제외, 1부터 시작해서 새로운 배열을 반환합니다. 배열의 인덱스는 0부터 시작합니다. 
		things = things.slice(1);
	}


  import AwaitBlock from './AwaitBlock.svelte';


</script>

<!-- 다음과 같은 경우 여러 조건을 else와 함께 '연결'할 수 있습니다. -->
<IfBlocks />
<hr />
<ElseBlock />
<hr />
<ElseIfBlock />
<hr />
<EachBlock />
<hr />

Remove first thing 버튼을 클릭할 때마다 things의 배열이 변경됩니다.
each 블록은 배열의 각 요소에 대해 다시 렌더링합니다. <br>
<button on:click={handleClick}> Remove first thing </button>

<!-- 각 블록에 대한 고유 식별자(또는 '키')를 지정합니다.
(thing.id)가 key입니다. 
구성 요소가 업데이트될 때 변경할 DOM 노드를 파악하는 방법을 Svelte에 알려줍니다. -->
{#each things as thing (thing.id)}
	<KeyedEachBlock name={thing.name} />
{/each}
<hr>
<AwaitBlock/>