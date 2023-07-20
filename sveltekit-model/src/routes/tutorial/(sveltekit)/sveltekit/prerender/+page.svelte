<script>
  // "/about"로 호출 시  src/routes/+layout.svelte의 slot tag 안에 표시됩니다.
  // 즉, 최상위 레이아웃이 적용됩니다. 
</script>
<div class="tutorial-topic">
  <h3>정적페이지로 사전 렌더링</h3>
  <div>
    +page.server.js에서 다음과 같이 설정을 합니다. 
    <pre>
      export const prerender = true;
    </pre>
    <br>
    사전 렌더링을 하여 정적인 페이지로 서비스 됩니다. 
  </div>
  
</div>


