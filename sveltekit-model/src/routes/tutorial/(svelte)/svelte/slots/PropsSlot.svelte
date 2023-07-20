<script lang="ts">

  // slot에 값을 전달할 props이다. 
  let myName: string = "Not Assigned"

  const onClick = () => {
    myName = "I'm Yirae."
  }

</script>
<div>
  <h4>Slot Props</h4>

  <!-- 이름=값 형태로 slot에 값을 전달할 수 있다. -->
  <slot myName={myName}>
    <p>slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것이다.</p>
  </slot>
 
  <button on:click={onClick}>나를 클릭하면 상위 컴포넌트로 값을 전달한다.</button>

</div>