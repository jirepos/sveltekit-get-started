<!-- 최상위 레이아웃 -->
<script>
	import { env as penv } from '$env/dynamic/public';
	const STYLE_SERVER_DOMAIN = penv.PUBLIC_STYLE_SERVER_DOMAIN;
</script>

<svelte:head>
	<!-- 실 개발에서 나중에 타이틀을 변경합니다.  -->
	<!-- Node.js 패키지가 아닌 라이브러리를 여기에서 로드합니다.  -->
	<title>UI Server</title>
	<link	href="{STYLE_SERVER_DOMAIN}/resources/libs/bootstrap-5.3.0/css/bootstrap.min.css"	rel="stylesheet" />
	<link	rel="stylesheet"	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"	/>
	<link rel="stylesheet" href="{STYLE_SERVER_DOMAIN}/resources/libs/jquery-ui-1.13.2/jquery-ui.css" />	
	<!-- <link rel="stylesheet" href="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css" /> -->
	<link href="{STYLE_SERVER_DOMAIN}/resources/framework/styles/global.css" rel="stylesheet" />
	<!-- <link href="{STYLE_SERVER_DOMAIN}/resources/libs/c3-0.7.20/c3.css" rel="stylesheet" /> -->
	<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
	<!-- <link	href="{STYLE_SERVER_DOMAIN}/resources/libs/highlight/styles/vs2015.min.css"	rel="stylesheet"/> -->

	<!-- <script src="{STYLE_SERVER_DOMAIN}/resources/libs/ckeditor5-build/ckeditor.js"></script> -->
	<!-- <script src="{STYLE_SERVER_DOMAIN}/resources/libs/highlight/highlight.min.js"></script> -->
	<!-- <script>hljs.highlightAll();</script> -->

	<!-- script 나열은 순서를 바꾸지 마세요. jQuery 다음에 jquery.ui나 select2를 나열하면  -->
	<!-- select2.min.js가 jquery 보다 먼저 로딩이 되어서 jQuery를 찾을 수 없다은 오류 발생합니다.  -->
	<!-- select2.min.js가 jquery 보다 먼저 로딩이 되어서 jQuery를 찾을 수 없다은 오류 발생합니다.  -->
	<!-- <script defer src="{STYLE_SERVER_DOMAIN}/resources/libs/jquery-3.7.0/jquery.js"></script> -->

	<!-- <script src="https://uicdn.toast.com/calendar/latest/toastui-calendar.min.js"></script> -->
	<!-- <script defer src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script> -->

	<!-- https://github.com/d3/d3 -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/d3@7"></script> -->
	<!-- <script src="{STYLE_SERVER_DOMAIN}/resources/libs/c3-0.7.20/d3.v5.min.js"></script>
	<script src="{STYLE_SERVER_DOMAIN}/resources/libs/c3-0.7.20/c3.min.js"></script> -->
	<!-- <script src="{STYLE_SERVER_DOMAIN}/resources/libs/c3-0.7.20/d3.v5.min.js"></script>
	<script src="{STYLE_SERVER_DOMAIN}/resources/libs/c3-0.7.20/c3.min.js"></script> -->
	<script	src="{STYLE_SERVER_DOMAIN}/resources/libs/bootstrap-5.3.0/js/bootstrap.bundle.min.js"></script>
	<!-- <script defer src="{STYLE_SERVER_DOMAIN}/resources/libs/jquery-ui-1.13.2/jquery-ui.min.js"></script> -->
	<!-- <script defer src="{STYLE_SERVER_DOMAIN}/resources/libs/select2-4.1.0/select2.min.js"></script> -->
	<!-- <script defer src="{STYLE_SERVER_DOMAIN}/resources/libs/select2-4.1.0/select2.min.js"></script> -->
	<script>

		function loadJavaScript(url, async = true, successCallback) {
			// debugger;
			let scriptEle = document.createElement('script');
			scriptEle.setAttribute('src', url);
			scriptEle.setAttribute('type', 'text/javascript');
			scriptEle.setAttribute('async', async);
			document.head.appendChild(scriptEle);
			// success event
			scriptEle.addEventListener('load', successCallback); 
			// error event
			scriptEle.addEventListener('error', (ev) => {
				console.log('Error on loading file', ev);
			});
		}

		function loadjQuery() {
			let jqueryUrl = "/resources/libs/jquery-3.7.0/jquery.js";
		  let jqueryUiUrl = "/resources/libs/jquery-ui-1.13.2/jquery-ui.min.js";
		  let select2Url = "/resources/libs/select2-4.1.0/select2.min.js";
		
			loadJavaScript(jqueryUrl, true, () => {
				loadJavaScript(jqueryUiUrl, true, () => {
					console.log('jquery-ui loaded');
				});
				loadJavaScript(select2Url, true, () => {
					console.log('select2 loaded');
				});
			});
		}
		
		loadjQuery(); 
		
	</script>
</svelte:head>
<slot />
