<script lang="ts">

	import Nested from './Nested.svelte';
  import Spread from './Spread.svelte';


	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};



</script>

<!-- property를 사용하고 있습니다.  -->
<Nested answer={"42"} />
<hr>

<!-- pkg는 Spred 컴포넌트의 properties에 대응합니다.  -->
<Spread  {...pkg} />
