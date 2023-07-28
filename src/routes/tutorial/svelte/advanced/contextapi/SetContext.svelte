<script lang="ts">

    import { setContext, afterUpdate, onMount, tick } from 'svelte';
    import GetContext from "./GetContext.svelte";

    let items:string[] = [];
    
    setContext('greeting',  "hello" );

    // 함수를 context로 설정할 수 있습니다. 
    setContext('item', { addItem })
    function addItem(item:string) {
      items.push(item);
    }

</script>

<h3>setContext</h3>

{items}

<hr>
<GetContext />
