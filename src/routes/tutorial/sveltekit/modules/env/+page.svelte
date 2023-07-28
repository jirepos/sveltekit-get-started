<script lang="ts">
  // client에서는 사용할 수 없음. 오류 발생함.
  // +page.Server.js에서 사용해야 함  
  // import { env }  from '$env/dynamic/private';
  import { env as penv }  from '$env/dynamic/public';
  const PUBLIC_TUTORIAL_API_URL = penv.PUBLIC_TUTORIAL_API_URL;
</script>

<div class="tutorial-topic">
  <h3>환경변수(Environment variables) 사용</h3>
  <hr>
  <h4>Public Environment variables</h4>
  /env 디렉토리의 .env.mode 파일을 읽을 수 있습니다. <br>
  PUBLIC_TUTORIAL_API_URL 환경변수의 값 : {PUBLIC_TUTORIAL_API_URL}
</div>

