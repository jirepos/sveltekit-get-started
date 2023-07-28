<script lang="ts">
  // addCounter function을 임포트합니다. 
  import ContextModule, { addCounter } from "./ContextModule.svelte";
</script>

<h3>context=module</h3>

<ContextModule/>
<ContextModule/>
<br>
<div>
  <!-- addCounter() 함수를 호출할 수 있습니다.  -->
  <button on:click={addCounter}>Add Count</button>
</div>