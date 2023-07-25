<script lang="ts">
	import {
		beforeUpdate,
		afterUpdate
	} from 'svelte';

  let count:number = 0;
  let span:HTMLElement;

  function handleEvent(){ 
    // 카운트 값이 변경되면 span의 innerHTML이 변경됩니다.
    // beforeUpdate와 afterUpdate가 실행됩니다.
    count++;
    console.log("handleEvent", count);

  }

  // beforeUpdate 함수는 DOM이 업데이트되기 직전에 작업이 수행되도록 예약합니다.
	beforeUpdate(() => {
    console.log("beforeUpdate")
    if(span) { // mount 되기 전에는 span이 null입니다. null 체크합니다. 
      console.log("span.innerHTML on beforeUpdate", span.innerHTML);
    }

	});

  // afterUpdate는 DOM이 데이터와 동기화되면 코드를 실행하는 데 사용되는 대응 항목입니다.
	afterUpdate(() => {
    console.log("afterUpdate");
    if(span) { // mount 되기 전에는 span이 null입니다. null 체크합니다. 
      console.log("span.innerHTML on afterUpdate", span.innerHTML);
    }
	});
  // beforeUpdate는 구성 요소가 마운트되기 전에 먼저 실행되므로 해당 속성을 읽기 전에 div의 존재를 확인해야 합니다.
</script>
<div>
  beforeUpdate and aferUpdate
  <button on:click={handleEvent}>Click</button>
   <!-- bind:this를 사용하여 변수와 바인딩 -->
  <span bind:this={span}>{count}</span>
</div>

	