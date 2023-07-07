<script>
	// main page layout 입니다.
	import TopSection from './TopSection.svelte';
	import BottomSection from './BottomSection.svelte';

</script>


<svelte:head>
  <title>Main page!!!</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <!-- static/resources/styles 아래 -->
  <link rel="stylesheet" href="/resources/styles/common.css" />

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</svelte:head>

<div class="module-div">
	<div>
		<TopSection />
	</div>
	<div class="module-div">
		<!-- src/routes/biz/+page.svelte가 slot에 표시됩니다.  -->
		<slot />
	</div>
	<div class="module-main-bottom">
		<hr>
		<BottomSection />
	</div>
</div>
