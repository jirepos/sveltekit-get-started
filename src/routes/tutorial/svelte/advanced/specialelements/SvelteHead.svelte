<script>
	const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
	let selected = themes[0];

  function onScriptLoaded() {
    console.log('onScriptLoaded', selected);
  }

  function onStylesLoaded(){ 
    console.log('onStylesLoaded', selected);
  }

</script>

<svelte:head>
  <!-- 아래 옵션을 선택하면 동적으로 css를 불러 옵니다.  -->
  <!-- load 이벤트는 javascript에더 핸들러 함수를 추가할 수 있습니다. 화면을 리프레시할 때는 호출되지 않습니다.  -->
	<link rel="stylesheet" href="/resources/tutorial/styles/{selected}.css" on:load={onStylesLoaded} />
  <!-- JavaScript도 삽입 가능합니다.  -->
</svelte:head>

<h2>&lt;svelte:head&gt;</h2>
<p>&lt;svelte:head&gt;요소를 사용하면 문서의 헤드 내부에 요소를 삽입할 수 있습니다. 이는 좋은 SEO에 중요한 제목 및 메타 태그와 같은 항목에 유용합니다.</p>
<div class="svelte-head">
  <select bind:value={selected}>
    <option disabled>choose a theme</option>
    {#each themes as theme}
      <option>{theme}</option>
    {/each}
  </select>
</div>
<br>
{selected}