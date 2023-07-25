<script lang="ts">

	import { onMount } from 'svelte';
	
  // 전역 clearTimeout() 메서드는 setTimeout()으로 생성한 타임아웃을 취소합니다.
  function cancelTimer(timerid:any) {
    console.log('clearTimeout');
    clearTimeout(timerid);
  }

  // timer를 생성합니다. 
  // setInterval이나 setTimeout에서 counter 변수를 사용하려면
  // 이와 같이 함수로 만들어야 합니다. 
  function configureInterval(span:HTMLElement, counter:number): any | undefined  {
    if(span == null) return undefined; 
    
    let timerid:any = setInterval(() => {
      counter++;
      console.log("setTimeout", counter); 
      span.innerHTML = counter.toString();
    }, 1000);
    return timerid; 
  }
  
	onMount(() => {
		let counter:number =0;
    // onMount에서 요소에 접근할 수 있습니다. 
    const span = document.querySelector('#display')! as HTMLElement;
    let timerid = configureInterval(span, counter);

    // 구성 요소가 소멸된 후에도 루프가 계속됩니다.
    // 이것을 고치기 위해서 cleanup function을 반환해야 합니다. 
		return () => {
			cancelTimer(timerid);
		};
	});
</script>


<p>모든 구성 요소에는 생성될 때 시작되고 소멸될 때 끝나는 수명 주기가 있습니다. 
  수명 주기 동안 중요한 순간에 코드를 실행할 수 있는 몇 가지 기능이 있습니다. 
  가장 자주 사용하게 될 것은 구성 요소가 처음 DOM에 렌더링된 후에 실행되는 onMount입니다.
  이 때 주로 초기화 작업이나 외부 라이브러리와의 통합 등을 수행할 수 있습니다.
</p>

<div>
  <span id="display">test</span>
</div>