<script>
</script>
<svelte:head>
	<title>Svelte/SvelteKit Tutorial</title>
  <!-- root layout을 상속 받는 모든 라우트에 적용됩니다.   -->
  <!-- Tutorial은 jQuery 적용합니다.  -->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</svelte:head>
<div class="tutorial-layout">
  <h1>Svelte/SvelteKit Tutorial</h1>
  <slot/>
</div>

