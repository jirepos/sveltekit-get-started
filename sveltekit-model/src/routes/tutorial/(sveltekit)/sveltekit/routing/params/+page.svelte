<script lang="ts">
  import { getStores, navigating, page, updated } from '$app/stores';
</script>
<hr>
<h4 class="h4-url">{$page.url}</h4>
<ul>
  <li><a href="/tutorial/sveltekit/routing/params/D1234">[dept] 파라미터 사용 예: /tutorial/sveltekit/routing/params/D1234</a></li>
  <li><a href="/tutorial/sveltekit/routing/params/D1234/U1234/info">[dept][user] 파라미터 사용 예: /tutorial/sveltekit/routing/params/D1234/U1234/info</a></li>
  <li><a href="/tutorial/sveltekit/routing/params/D1234/U1234/info/11/22/33/44"> rest 파라미터([...]) 사용 예: /tutorial/sveltekit/routing/params/D1234/U1234/info/11/22/33/44</a></li>
  <li><a href="/tutorial/sveltekit/routing/params/blog/aaa/bbb/ccc/read">rest 파라미터([...]) 사용 예:tutorial/sveltekit/routing/params/blog/aaa/bbb/ccc/read</a></li>
  <li><a href="/tutorial/sveltekit/routing/params/optional/en/home">옵셔널 파라미터 예: /tutorial/sveltekit/routing/params/optional/en/home</a></li>
</ul>
