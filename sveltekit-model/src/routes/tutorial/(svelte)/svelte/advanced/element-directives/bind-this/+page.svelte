<script lang="ts">
  
  let divElement: HTMLElement;

  function handleEvent() {
    divElement.innerHTML = "바인딩됨";
  }

</script>

<h3>bind:this</h3>
<p>bind:this를 사용하면 HTML 요소와 바인딩할 수 있습니다.</p>
<div bind:this={divElement}>이거</div>
<button on:click={handleEvent}>Click</button>


