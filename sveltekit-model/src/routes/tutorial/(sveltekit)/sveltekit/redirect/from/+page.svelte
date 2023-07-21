<script lang="ts">
  import { goto } from '$app/navigation';

  // SvelteKit이 지정된 URL로 탐색할 때(또는 탐색에 실패하면 약속이 거부됨) 해결되는 Promise를 반환합니다. 
  // 외부 URL의 경우 goto(url)를 호출하는 대신 window.location = url을 사용하십시오.
  const onGoto = () => {
    goto('/tutorial/sveltekit/redirect/t11o')
    .then( (result) => {
      console.log(result);
    })
  }

  const onGotoExternal = () => {
    window.location.href = "https://www.naver.com";
  }
</script>

<div class="tutorial-topic">
  <h3>리다이렉트 테스트</h3>
  "/tutorial/sveltekit/redirect/to"로 디라이렉트 합니다. &lt;a&gt; 태그를 사용할 수 있습니다.  
  <a href="/tutorial/sveltekit/redirect/to" target="_blank">Redirect</a>
  <br>
  <br>
  <p>goto()를 이용한 리다이렉트</p>
  <button on:click={() => goto('/tutorial/sveltekit/redirect/to')}>Redirect</button>
  <br>
  <br>
  <p>goto()는 Promise를 반환합니다. </p>
  <br>
  <button on:click={onGoto}>Redirect</button>
  <br>
  <br>
  <p>외부로의 리다이렉트는 window.location을 사용합니다.</p>
  <button on:click={onGotoExternal}>Redirect</button>
</div>
