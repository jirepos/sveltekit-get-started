<script lang="ts">
</script>

<div>
	<h4>Named Slot</h4>

	<slot name="header">
		<p>header slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것입니다.</p>
	</slot>
	<p>
		Named Slot의 내부 컨텐트입니다. 
	</p>
  <!-- $$slots.[슬롯이름]으로 참조할 수 있다. true or flase 값을 가진다.  -->
  <!-- https://svelte.dev/docs/special-elements#slot -->
	{#if $$slots.header}
    <!-- header slot이 전달되지 않으면 값을 flase -->
		<slot name="footer">
			<p>footer slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것입니다.</p>
		</slot>
	{/if}
	<div />
</div>