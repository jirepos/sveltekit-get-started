<script lang="ts">

  import { getStores, navigating, page, updated } from '$app/stores';
  import { onMount } from 'svelte';
  
  onMount( async () => {
    console.log('onMount');
    console.log('page', page);
    console.log('navigating', navigating);
    console.log('updated', updated);
    console.log('getStores', getStores);
    console.log('getStores().page', getStores().page);
  });
  </script>



<div class="tutorial-topic">
  <h3>$app/stores</h3>
  <h5>page</h5>
  <div>page.status = {$page.status}</div>
  <div>page.error = {$page.error}</div>
  <div>page.url = {$page.url}</div>
  <hr>

  <strong>+page.server.ts</strong>
  <pre>
    <code>
      {`
      import { getStores, navigating, page, updated } from '$app/stores';
      export function load()  {
       // load() 함수에서는 사용할 수 없습니다. 다음과 같은 오류가 발생합니다. 
       // Error: Function called outside component initialization
       console.log(getStores().page);
      }
      `}
    </code>
  </pre>
  <h4>참조</h4>
  <a href="https://kit.svelte.dev/docs/modules#$app-paths-base">$app/stores</a>
</div>

  
