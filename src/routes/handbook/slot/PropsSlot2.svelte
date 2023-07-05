<script lang="ts">
	// 목록을 부모 컴포넌트로부터 전달 받는다.
	export let items: any[];
</script>

<div>
	<h2>Slot Props2</h2>
	<ul>
    <!-- https://svelte.dev/docs/special-elements#slot -->
		<!-- 전달받은 prop으로 slot을 0 개 이상 렌더링할 수 있다.  -->
		{#each items as item}
			<li>
				<slot prop={item} />
			</li>
		{/each}
	</ul>
</div>
