<script lang="ts">
  import { greeting, name } from './stores-binding'; 

</script>

<h3>Store Bindings</h3>

<p>
  greeting은 name의 파생 저장소입니다. 
</p>
{$greeting}

<p>스토어가 writable이면 그것은 set 메소드를 가집니다. 그것의 값을 바인딩할 수 있습니다.
  input 에 값을 입력하면 greeting의 값이 변경됩니다.
</p>
<input bind:value={$name} />
<br>
<button on:click={() => ($name += '!')}> Add exclamation mark! </button>