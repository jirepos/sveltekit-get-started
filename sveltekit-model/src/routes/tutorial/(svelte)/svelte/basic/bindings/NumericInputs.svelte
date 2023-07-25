<script>
	let a = 1;
	let b = 2;
</script>
<p>
  DOM에서는 모든 것이 문자열입니다. 숫자 입력을 처리할 때 도움이 되지 않습니다.
  예: type="number" and type="range"
  
  bind:value를 사용하면 Svelte가 이를 처리합니다.

</p>
<label>
	<input type="number" bind:value={a} min="0" max="10" />
	<input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
	<input type="number" bind:value={b} min="0" max="10" />
	<input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
