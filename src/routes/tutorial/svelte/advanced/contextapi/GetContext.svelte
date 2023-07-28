<script lang="ts">
  import { getContext } from 'svelte';

  // 부모 자식간처럼 계층적으로 이루어져 있어야 context를 사용할 수 있습니다. 
  // 형제 관계에서는 동작하지 않습니다. 
  let greeting:string =  getContext('greeting');
  
  let item:any = getContext('item');
  item.addItem('item1'); // 함수를 호출하여 값을 변경할 수 있습니다.
  item.addItem('item2');
  item.addItem('item3');

</script>
<h3>getContext</h3>
{greeting}
<br>

