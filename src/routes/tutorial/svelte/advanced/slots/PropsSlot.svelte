<script lang="ts">

  // slot에 값을 전달할 props이다. 
  let myName: string = "Not Assigned"

  const onClick = () => {
    myName = "I'm Yirae."
  }
</script>
<div>
  <h4>Slot Props</h4>
  <!-- 
    'key=value' 형태의 props를 사용하여 부모에 값을 전달할 수 있습니다.  
    부모는 let: 디렉티브를 사용하여 값을 expose할 수 있습니다. 
  -->
  <slot myName={myName}>
    <p>slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것입니다.</p>
  </slot>
 
  <button on:click={onClick}>클릭하면 상위 컴포넌트로 값을 전달합니다.</button>
</div>