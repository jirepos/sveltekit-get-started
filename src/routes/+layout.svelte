<script>
  // $lib 을 사용하여 src/lib 폴더에 있는 파일을 불러올 수 있습니다.
  // global styles 적용
  import '$lib/styles/global.scss'
</script>

<!-- 최 상위 레이아웃입니다.  -->
<div>Root Layout</div> 
<!-- slot 안에 +page.svelte가 표시됩니다. -->
<slot/>