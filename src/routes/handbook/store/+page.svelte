<script lang="ts">

  // svelte/store 사용 시에는 서버를 재시작해야 정상동작함
  // 안그러면 다음과 같은 오류 발생함 
  // Failed to fetch dynamically imported modul  svelte store
  import { count } from "$src/store";
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

</script>
<h1>svelte/store</h1>
<button on:click={clickHandler}>ClickMe</button>
<div>count = {cnt}</div>
