<script>
	let hereKitty = false;
</script>

<h3>&lt;svelte:body&gt;</h3>

<p>
  document.body에서 발생하는 이벤트를 감지하려면 svelte:body를 사용하십시오.
  그는 창에서 실행되지 않는 mouseenter 및 mouseleave 이벤트에 유용합니다.
</p>
<svelte:body
	on:mouseenter={() => hereKitty = true}
	on:mouseleave={() => hereKitty = false}
/>
마우스가 도큐먼를 벗어나면 false, 마우스가 도큐먼트 안에 있으면 true입니다.
{hereKitty}




