<script>
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	let selected = options[0];
</script>

<h3>&lt;svelte:component&gt;</h3>
<p>color가 red가 선택이되면 RedThing.svelte가 표시됙, 
  color가 green이 선택되면 GreenThing.svelte가 표시될 것입니다.</p>
<p>&lt;svelte:component&gt;요소는 this 속성으로 지정된 구성 요소 생성자를 사용하여 동적으로 구성 요소를 렌더링합니다. 
  속성이 변경되면 구성 요소가 소멸되고 다시 생성됩니다.</p>
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component} />
