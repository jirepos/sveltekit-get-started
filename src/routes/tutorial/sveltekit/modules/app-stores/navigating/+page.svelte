<script lang="ts">
  import { getStores, navigating, page, updated } from '$app/stores';

  // refresh할 때는 이 값이 없음
  let navigatingInfo = JSON.stringify($navigating);
  console.log($navigating?.from?.route.id);

</script>
<h3>app/stores -navigating</h3>
<br>
navigating에는 다음과 같은 정보가 있다. 
<pre>
  <code>
    {`{
      "from": {
        "params": {},
        "route": {
          "id": "/tutorial/(sveltekit)/sveltekit/modules/app-stores"
        },
        "url": "http://ejin.com:5173/tutorial/sveltekit/modules/app-stores"
      },
      "to": {
        "params": {},
        "route": {
          "id": "/tutorial/(sveltekit)/sveltekit/modules/app-stores/navigating"
        },
        "url": "http://ejin.com:5173/tutorial/sveltekit/modules/app-stores/navigating"
      },
      "willUnload": false,
      "type": "link"
    }`}

  </code>
</pre>
<hr>
{navigatingInfo}
<hr>
<br>


{#if $navigating}
  <!-- 원인은 모르지만 $navigating이 null임 -->
  <ul>
    <li>navigating.from.route.id: {$navigating.from?.route.id}</li>
  </ul>
{:else}
  <p>refresh</p>
{/if}

