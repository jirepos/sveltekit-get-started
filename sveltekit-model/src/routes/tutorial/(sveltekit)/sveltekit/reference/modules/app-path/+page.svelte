<script lang="ts">
  import { base, assets } from '$app/paths';
</script>


<div class="tutorial-topic">
  <h1>$app/paths</h1>
  <div>
    설정된 값이 없으면 출력되지 않는다.
    <ul>
      <li>base는 config.kit.paths.base의 값이다. 
       </li>
       <li>assets는 config.kit.paths.assets의 값이다.</li>
    </ul>
     
  </div>
  출력: <br>
  <ul>
    <li>base: {base}</li>
    <li>assets: {assets}</li>
  </ul>
</div>


