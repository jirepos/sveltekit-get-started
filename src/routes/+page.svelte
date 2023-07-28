<script lang="ts">
  // lang="ts"는 스크립트 언어를 타입스크립트로 지정합니다.

</script>
<!-- URL로만 접근 시 이 페이지가 표시됩니다.  -->
<!-- 이 페이지는 /routes/+layout.svelte의 slot tag 안에 표시됩니다.-->
<h1>Contents</h1>
<ul>
  <li><a href="/tutorial">Tutorial</a></li>
  <li><a href="/ux">UI/UX Design</a></li>
  <li>UI App Servers
    <ul>
      <li><a href="/batch">Batch UI Server</a></li>
      <li>
        <a href="/gw">Groupware UI Server</a>
        <ul>
          <li><a href="/gw/m">Groupware Main</a></li>
          <li><a href="/gw/board/B1234" target="_blank" >게시판 메인</a></li>
          <li><a href="/gw/email/B3456" target="_blank" >이메일 메인</a></li>
          <li><a href="/gw/v/board/A1234" target="_blank" >게시글 조회화면</a></li>
          <li><a href="/gw/v/email/A1234" target="_blank" >이메일 조회화면</a></li>
        </ul>
      </li>
      <li><a href="/iam">IAM UI Server</a></li>
      <li><a href="/messenger">Messenger UI Server</a></li>
    </ul>
  </li>
</ul>

