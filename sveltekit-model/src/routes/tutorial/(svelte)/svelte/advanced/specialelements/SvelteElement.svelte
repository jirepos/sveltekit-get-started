<script>
	const options = ['h1', 'h2', 'h3', 'p', 'marquee'];
	let selected = options[0];
</script>

<h3>&lt;svlete:element&gt;</h3>
<p>
  어떤 종류의 DOM 요소를 렌더링할지 항상 미리 알 수는 없습니다. &lt;svelte:element&gt;는 여기에서 유용합니다.
</p>
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<svelte:element this={selected}>
	I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>

