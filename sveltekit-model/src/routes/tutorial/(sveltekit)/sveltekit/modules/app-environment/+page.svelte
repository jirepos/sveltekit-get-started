<script lang="ts">

  import { browser, dev, building, version } from '$app/environment';


</script>
<h3>$app/environemnt</h3>
<br>
<ul>
  <li>browser: {browser} 브라우저 환경이면 true</li>
  <li>dev: {dev} dev server가 실행중이면 true</li>
  <li>version: {version} config.kit.version.name </li>
  <li>building:{building} build 단계이면 true </li>
</ul>

