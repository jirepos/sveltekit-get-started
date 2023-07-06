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
<h1>$app/stores</h1>
<h2>page</h2>
<div>page.status = {$page.status}</div>
<div>page.error = {$page.error}</div>
<div>page.error = {$page.url}</div>

