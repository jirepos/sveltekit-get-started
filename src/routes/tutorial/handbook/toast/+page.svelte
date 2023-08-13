<script>
  // Server side rendering하지 않도록 ssr=false로 설정해야 합니다. 
  // 리프레시할 때 window 객체가 없어서 오류가 발생합니다.
  import TestToastCalendar from "./TestToastCalendar.svelte";
</script>
<h3>Toast UI Calendar </h3>
<TestToastCalendar/>