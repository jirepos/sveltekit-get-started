<script lang="ts">

  // svelte/store 사용 시에는 서버를 재시작해야 정상동작함
  // 안그러면 다음과 같은 오류 발생함 
  // Failed to fetch dynamically imported modul  svelte store
  
  import { count, time, elapsed, name, greeting } from "$src/store";
  import { onDestroy } from 'svelte'
    
  
  
  let cnt:number = 0; 
  const unsubscribe = count.subscribe((value) => cnt = value);
  count.set(1);
  const clickHandler = () => {
    count.update((n) => {
      console.log(n); 
      return n +1; 
    });
  }

  onDestroy(() => unsubscribe());

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

</script>

<h1>svelte/store</h1>
<hr>
<hr>

<button on:click={clickHandler}>ClickMe</button>
<div>count = {cnt}</div>
<hr>

<div>time: {formatter.format($time)}</div>
<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>
<hr>
<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}> Add exclamation mark! </button>