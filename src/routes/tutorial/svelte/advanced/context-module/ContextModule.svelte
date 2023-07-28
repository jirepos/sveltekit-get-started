<script context="module" lang="ts">

console.log('한번만 실행이 됩니다.');
	// <script context="module"> 에서는 반응성을 구현 할 수 없습니다. 
  // 만약 다양한 컴포넌트에서 반응성을 필요로 한다면 store를 생성하는 것을 고려해야 합니다. 
	let counter = 0;
	// 컴포넌트가 default export이기 때문에 default export를 가질 수 없습니다. 
	// 외부로 노출합니다. 
	export function addCounter() {
		console.log('addCounter');
		counter++;  // 여기서 값을 변경해도 counter가 반응성이 아니므로 아래 마크업에서 카운터 값이 변경되지 않습니다. 
	}
</script>

<script lang="ts">
	console.log("인스턴스마다 실행됩니다.");
</script>

<div>
	<p>count: {counter} &lt;-- 값이 변경이 되어도 반응성이 아니므로 값이 변경되지 않습니다.</p>
	<div>
		<!--여기서 context=module에 선언되어 있는 변수, 함수에 접근 가능 -->
		<button on:click={addCounter}>Inner Button:Add Counter</button>
	</div>
</div>
