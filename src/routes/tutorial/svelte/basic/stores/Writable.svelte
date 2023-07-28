<script lang="ts">

  import { count } from "./stores-writable";
  import { onDestroy } from 'svelte'

  // Writeable 객체의 변수 값을 저장할 변수 
  let cnt:number = 0; 

  // 먼저 구독을 합니다.  unsubscribe 객체가 반환됩니다. 
  // value는 쓰기 객체의 값입니다. 그 값을 cnt에 저장합니다. 
  // 
  const unsubscribe = count.subscribe((value) => cnt = value);
  
  // Writable 초기화 
  count.set(1);  // 

  // Writable 객체의 값이 변경하려면 update 메서드를 사용합니다.
  // n은 현재 Writable 객체의 값입니다. 
  count.update((n) => {
    console.log(n); 
    // 값을 변경하고 변경된 값을 반환해야 합니다. 
    return n +1;   // 변경된 값을 반환해야 합니다.
  });
  
  // 컴포넌트가 소멸될 때 구독을 해지해야 합니다. 
  onDestroy(() => unsubscribe());
</script>

<h3>Writable</h3>
{cnt}