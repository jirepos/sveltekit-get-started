<script lang="ts">
  // client에서는 사용할 수 없음. 오류 발생함.
  // +page.Server.js에서 사용해야 함  
  // import { env }  from '$env/dynamic/private';
  import { env as penv }  from '$env/dynamic/public';

  // const DATABASE_URL = env.DATABASE_URL;
  const API_URL = penv.PUBLIC_API_URL;
</script>

<h1>How to use Environment variables</h1>
<hr>
<h2>Public Environment variables</h2>
{API_URL}
