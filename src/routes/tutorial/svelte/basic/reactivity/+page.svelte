<script lang="ts">

	let count = 0;

  // 반응형 선언을 사용하여 변수를 서로 동기화할 수 있습니다
  // Svelte에서는 참조 된 값이 변경될 때마다 이 코드가 다시 실행한다는 의미의 라벨 이름으로 $를 사용하는 것입니다. 
  // 위의 코드의 경우 count가 변경되면 $: 이하의 자바스크립트가 다시 실행됩니다.
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}

  // 임의의 명령문을 반응적으로 실행할 수도 있습니다. 예를 들어 count 값이 변경될 때마다 기록할 수 있습니다.
  $: console.log('the count is ' + count);

  // 블록과 함께 쉽게 그룹화할 수 있습니다.
  $: {
    console.log('the count ==  ' + count);
    // alert('I SAID THE COUNT IS ' + count);
  }


  // $의 선언형 문법을 사용했을 때와 동일하게 참조 된 값이 변경될 때마다 $: 이하의 자바스크립트가 다시 실행됩니다. 
  $: if( count >= 10) {
    alert(`count is dangerously high!`);
    // Svelte에서는 변수의 재할당이 되어야 반응형이 동작합니다.
    // 위의 doubled가 동작합니다. 
    count = 9;
  }

  // Svelte의 반응성은 할당에 의해 트리거됩니다. 배열이나 객체를 변경하는 메서드는 자체적으로 업데이트를 트리거하지 않습니다.
  let numbers = [1, 2, 3, 4];

	function addNumber() {
    // numbers.push(numbers.length + 1); // 이렇게 하면 반응성이 동작하지 않습니다.
    // pop, shift, splice와 같은 배열 메서드와 Map.set, Set.add 등과 같은 객체 메서드에도 동일한 규칙이 적용됩니다.
		numbers = [...numbers, numbers.length + 1];  // 할당을 해야 동작합니다. 
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<br>
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}> Add a number </button>