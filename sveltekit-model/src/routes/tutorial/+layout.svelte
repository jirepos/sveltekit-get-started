<script>
	// $lib 을 사용하여 src/lib 폴더에 있는 파일을 불러올 수 있습니다.
	// global styles 적용
	// import '$lib/styles/global.scss'
	// npm 패키지로 설치한 경우 다음과 같이 임포트합니다.
	// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
	// 그런데 document가 없다고 오류 발생합니다.
	// import * as bootstrap from 'bootstrap';
</script>

<svelte:head>
	<title>SvelteKit 1.0</title>
	<!-- root layout을 상속 받는 모든 라우트에 적용됩니다.   -->
	<link href="/resources/libs/bootstrap-5.3.0/css/bootstrap.min.css" rel="stylesheet" />
	<link href="/resources/framework/styles/global.css" rel="stylesheet" />
	<!-- 외부 리소스에 on:[eventName]을 사용하여 이벤트를 바인딩할 수 있다.  -->
	<!-- 그러나 둘 중에 어느 것이 먼저 로드될지는 알 수 없다. -->
    <!-- Tutorial은 jQuery 적용합니다.  -->
	<link rel="stylesheet" href="/resources/libs/jquery-ui-1.13.2/jquery-ui.css" />
	<!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" /> -->
	<script src="/resources/libs/bootstrap-5.3.0/js/bootstrap.bundle.min.js"></script>
	<!-- CDN으로 로드하는 것도 가능합니다. -->
	<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
	<!-- <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script> -->

	<script src="/resources/libs/jquery-3.7.0/jquery.js"></script>
	<script src="/resources/libs/jquery-ui-1.13.2/jquery-ui.js"></script>


</svelte:head>
<div class="tutorial-layout">
  <div><a href="/tutorial">Tutorial</a></div>
	<slot />
</div>