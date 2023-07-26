<script lang="ts">
  import { getStores, navigating, page, updated } from '$app/stores';
</script>
<hr>
<div class="h4-url">현재 페이지 URL: {$page.url}</div>
<br>
<ul>
  <li>
    <a href="routing-advanced/parameter/u1234/user">라우팅 파라미터</a>
  </li>
  <li>
    <a href="routing-advanced/parameter/aabbcc/user">라우팅 파라미터 에러페이지</a>
  </li>
  <li>
    <a href="routing-advanced/rest/d1234/u9999/info/aaa/bbb/ccc ">Rest parameters (1)</a>
  </li>
  <li>
    <a href="routing-advanced/rest/blog/aa/bb/cc/dd/ee/read ">Rest parameters (2)</a>
  </li>
  <li>
    <a href="routing-advanced/optional/en/home ">Optiona Parameter (1)</a>
  </li>
  <li>
    <a href="routing-advanced/optional/ko/home ">Optiona Parameter (2)</a>
  </li>
  <li>
    <a href="routing-advanced/querystring/aa?name=abc&age=10">Query string</a>
  </li>
  <li>
    <a href="routing-advanced/redirect/from">Redirect using goto</a>
  </li>
  
</ul>
