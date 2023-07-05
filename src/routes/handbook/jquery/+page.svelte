<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('onMount');
    // @ts-ignore
    if(window.jQuery) { 
      // @ts-ignore 
      window.jQuery('#ui-elem').html('jQuery is working');
    }else {
      // ! 연산자를 추가하여 obj.lastName은 값이 무조건 할당되어있다고 컴파일러에게 전달하여 null 제약조건을 완화합니다.
      document.querySelector<HTMLElement>("#ui-elem")!.innerHTML = "jQuery is not working";
    }

    // jquery datepicker
    // @ts-ignore 
    window.jQuery( "#datepicker" ).datepicker();
  });

</script>


<h1>How to use jQUery</h1>
<div id="ui-elem"></div>

<button type="button" class="btn btn-dark">Dark</button>

<p>Date: <input type="text" id="datepicker"></p>
 