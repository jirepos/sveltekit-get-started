<script lang="ts">

	let name = 'world';
  let targetValue = 'Hello World!'; 


  // input 이벤트는 <input>, <select>, <textarea> 요소의 value가 바뀔 때 발생합니다.
  // input event는 입력할 때마다 발생합니다. 
  function handleInput(e) {
    console.log(e.target?.name);   // checkInput입니다. 
    console.log("New Value:", e.target?.value);
    // targetValue에 값을 할당합니다. 
    targetValue = e.target?.value;
  }
  

</script>

<p>
일반적으로 Svelte의 데이터 흐름은 하향식입니다. 즉, 부모 컴포넌트는 자식 컴포넌트 
의 props을 설정할 수 있고 컴포넌트는 요소에 속성을 설정할 수 있지만 그 반대는 아닙니다.
때로는 규칙을 깨는 것이 중요합니다. 
</p>

<br>
<p>기존의 방식으로 input 이벤트를 활용합니다. 값이 바뀔 때마다 이벤트가 발생합니다.</p>
<input type="text" name="checkInput" on:input={handleInput}>
<br>
{targetValue}
<br>
<br>
<p>bind:value={`{변수명}`}을 사용하면 간단히 할 수 있습니다.</p>

<input bind:value={name} />
<h1>Hello {name}!</h1>
