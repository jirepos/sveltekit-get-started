<script>
  // crewateEventDispatcher를 임포트 해야 합니다. 
	import { createEventDispatcher } from 'svelte';

  // 이벤트 디스패처를 만듭니다.
	const dispatch = createEventDispatcher();

  
	function sayHello() {
    // 이벤트를 발행합니다. 
    // dispatch(이벤트명, { 이벤트 객체})
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

구성 요소는 이벤트를 전달할 수도 있습니다. 그렇게 하려면 이벤트 디스패처를 만들어야 합니다.
<br>

<button on:click={sayHello}>
	Click to say hello
</button>
