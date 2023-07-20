<script lang="ts">
</script>

<div>
	<h2>Named Slot</h2>
	<slot name="header">
		<p>header slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것이다.</p>
	</slot>

	Named Slot의 내부 컨텐트이다. 

  <!-- $$slots.[슬롯이름]으로 참조할 수 있다. true or flase 값을 가진다.  -->
  <!-- https://svelte.dev/docs/special-elements#slot -->
	{#if $$slots.header}
    <!-- header slot이 전달되지 않으면 값을 flase -->
		<slot name="footer">
			<p>footer slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것이다.</p>
		</slot>
	{/if}

	<div />
</div>