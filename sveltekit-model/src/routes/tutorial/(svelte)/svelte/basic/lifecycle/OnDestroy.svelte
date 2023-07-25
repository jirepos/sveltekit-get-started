<script lang="ts">

import { onMount, onDestroy } from 'svelte'

onMount(()=> { 
  console.log("onMount")
});

// DOM에서 구성 요소를 제거할 때 onDestroy() 메서드가 사용됩니다. 
// 구성 요소가 DOM에서 제거되기 전에 호출해야 합니다.
onDestroy(()=> { 
  console.log("onDestroy")
});

</script>

<h3>onMount와 onDestroy</h3>
<p>DOM에서 구성 요소를 제거할 때 onDestroy() 메서드가 사용됩니다. 구성 요소가 DOM에서 제거되기 전에 호출해야 합니다. </p>

