<script>
</script>
<svelte:head>
	<title>SvelteKit 1.0</title>
	<link href="/resources/libs/bootstrap-5.3.0/css/bootstrap.min.css" rel="stylesheet" />
	<link href="/resources/framework/styles/global.css" rel="stylesheet" />
	<script src="/resources/libs/bootstrap-5.3.0/js/bootstrap.bundle.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</svelte:head>
<div>
	<!-- WebApp의 최 상위 레이아웃입니다.  -->
	<slot />
</div>