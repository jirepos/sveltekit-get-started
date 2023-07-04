<script lang="ts">
  import UserInfo from "./UserInfo.svelte";
  // +pages.server.ts에서 반환한 데이터 
  // data 프로퍼티를 다른 컴포넌트의 프로퍼티로 전달할 수 없음. 
  export let data;
  // 변수에 할당하여 다른 컴포넌트의 props에 전달해야 함 
  let userId = data.userId; 
</script>

<UserInfo userId={userId}/>


