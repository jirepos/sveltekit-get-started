<script lang="ts">

export let count:number;

</script>

<h3>&lt;Svelte:self&gt;</h3>
Svelte는 다양한 내장 요소를 제공합니다. 첫 번째인 svelte:self 는 컴포넌트가 재귀적으로 자신을 포함할 수 있도록 합니다.

<!-- 무한 루프에 빠지지 않도록 count 체크  -->
{#if count > 0}
  <p>counting down... {count}</p>
  <!-- 자기 자신을 포함  -->
  <svelte:self count={count - 1} />
{:else}
  <p>lift-off!</p>
{/if}