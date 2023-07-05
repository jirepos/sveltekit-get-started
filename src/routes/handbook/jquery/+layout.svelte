<script>
	
</script>

<svelte:head>
	<title>jQuery Test</title>
	<!-- 여기에 추가한 bootstrap는 이 라우트 및 하위 라우트만 적용됩니다. 상위 라우트 경로에는 적용되지 않습니다.  -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
	

  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
  
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"
	></script>

  <!--
  src/app.html에 script tag를 사용하여 jQuery를 로드하도록 설정하고 
  여기에 jquery-ui.js를 로드하도록 설정하면 다음과 같은 오류가 발생합니다.
  window.jQuery(...).datepicker is not a function svelte

  app.html에 둘 다 설정하거나 여기에 둘 다 설정하면 정상동작합니다.
  -->
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

</svelte:head>

<h2>jquery Layout</h2>
<slot />
