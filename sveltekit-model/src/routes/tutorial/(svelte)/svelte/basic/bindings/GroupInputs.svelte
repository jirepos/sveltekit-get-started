<script>
	let scoops = 1;
	let flavours = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<p>
  동일한 값과 관련된 여러 type='radio' 또는 type='checkbox' 입력이 있는 
	경우 bind:group을 value 속성과 함께 사용할 수 있습니다.
</p>
<h2>Size</h2>

<p>아래는 radio group 을 만듭니다. </p>
{#each [1, 2, 3] as number}
	<label>
		<input
			type="radio"
			name="scoops"
			value={number}
			bind:group={scoops}
		/>

		{number} {number === 1 ? 'scoop' : 'scoops'}
	</label>
{/each}



<h2>Flavours</h2>
<p>아래는 checkbox 그룹을 만듭니다. 선택된 값은 flavours 배열에 저장됩니다.  </p>

{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
	<label>
		<input
			type="checkbox"
			name="flavours"
			value={flavour}
			bind:group={flavours}
		/>

		{flavour}
	</label>
{/each}


{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {formatter.format(flavours)}
	</p>
{/if}