<script lang="ts">
  import { assets, base } from '$app/paths';

  let assetsInfo = JSON.stringify(assets); 

</script>

<h3>$app/path</h3>
<ul>
  <li>assets: {assetsInfo}  config.kit.paths.assets와 일치하는 절대 경로입니다.</li>
  <li>base: {base} config.kit.paths.base와 일치하는 문자열입니다.</li>
</ul>