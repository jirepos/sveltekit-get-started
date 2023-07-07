<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	// jQuery 로딩 여부
	let isScriptLoaded = false;

	// 라우트를 타고 들어 오는 경우든 화면 리프레시를 하던 경우던 실행되지 않는다.
	const onLoadOfWindow = () => {
		// is not working
		console.log('<svelte:window on:load={onLoad}> 이벤트');
	};

	//refresh를 하던 라우트를 타고 들어오던 이벤트가 트리거 되지 않는다.
	const onReadyStateChange = () => {
		console.log('onReadyStateChange==>');
		switch (document.readyState) {
			case 'loading':
				console.log('loading');
				break;
			case 'interactive':
				console.log('interactive');
				break;
			case 'complete':
				console.log('complete');
				break;
		}
	};

	const onClick = () => {
		console.log('button onClick');
	};

	onMount(() => {
    console.log('onMount');

    // 라우트를 타고 들어와도 화면을 리프레시해도 onMount가 실행된다. 
    // 리프레시 하는 경우에는 <svelte:head> 안의 on:load={onScriptLoaded} 이벤트가 실행되지 않는다. 
    // 라우트를 타고 들어오는 경우에는 jQuery가 이미 로드되어 있는데 <svelte:head> 안의 jQuery를 중복으로 로드하여
    // 오류가 발생한다. 
    // 그래서 jQuery가 없는 경우에는 스크립트를 로드하도록 변경했다. 
		// @ts-ignore
		if (!window.jQuery) {
      console.log('jQuery is not defined');
			// @ts-ignore
			// delete window.jQuery;
      loadScript();
		}
		
		// window.jQuery not defined
		// console.log(window.jQuery);
		// 화면 리프레시할 때 실행된다. 라우트를 타고 들어오면 에러가 발생한다.
		// @ts-ignore
		setDatePicker();
	});

	onDestroy(() => {
		console.log('onDestroy');
		// 여기서는 windw를 참조 할 수 없음
		// ReferenceError: window is not defined
		// console.log(window);
		// @ts-ignore
		// if(window.jQuery) {
		//   // @ts-ignore
		//   window.jQuery = null;
		// }
	});

	const setDatePicker = () => {
		// @ts-ignore
		if (window.jQuery) {
			console.log('jQuery is defined');
			// jQuery is not defined
			// @ts-ignore
			let jq = window.jQuery;
			jq('#disp').html('jQuery Test');
			// jquery datepicker
			// @ts-ignore
			console.log(jq('#datepicker'));
			console.log(document.querySelector('#datepicker'));
			jq('#datepicker').datepicker();
		} else {
			console.log('jQuery is not defined');
		}
	};

	// route를 타고 들어오면 이벤트가 실행되지만 리프레시하면 실행되지 않음
	const onScriptLoaded = () => {
		console.log('onScriptLoaded');
		isScriptLoaded = true;
		setDatePicker();
	};
	// route를 타고 들어오면 이벤트가 실행되지만 리프레시하면 실행되지 않음
	const onCssLoaded = () => {
		console.log('onCssloaded');
	};

	// 스크립트 로드
	const loadScript = () => {
		// @ts-ignore
		if (!window.jQuery) {
			let script = document.createElement('script');
			script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';
			script.addEventListener('load', () => {
        loadScript2();
      });
			script.async = true;
			document.body.appendChild(script);
		}
	};

  const loadScript2 = () => {
		// @ts-ignore
		// if (!window.jQuery) {
			let script = document.createElement('script');
			script.src = 'https://code.jquery.com/ui/1.13.2/jquery-ui.js';
			script.addEventListener('load', () => {
        onScriptLoaded();
      });
			script.async = true;
			document.body.appendChild(script);
		// }
	};


</script>

<!-- 라우트를 타고 들어 오는 경우든 화면 리프레시를 하던 경우던 실행되지 않는다.  -->
<svelte:window on:load={onLoadOfWindow} />

<svelte:head>
	<title>jQuery Test</title>

	<script>
		// 화면전체를 리프레시하면 이벤트가 실행 그러나 라우트를 타고 들어오면 실행되지 않는다.
		document.addEventListener('DOMContentLoaded', function (event) {
			// 외부 리소스가 두 개 이지만 한 번만 실행 된다.
			console.log('document.DOMContentLoaded');
		});

		// 화면전체를 리프레시하면 이벤트가 실행 그러나 라우트를 타고 들어오면 실행되지 않는다.
		window.addEventListener('DOMContentLoaded', function (event) {
			// 외부 리소스가 두 개 이지만 한 번만 실행 된다.
			console.log('window.DOMContentLoaded');
		});

		// 화면전체를 리프레시하면 이벤트가 실행 그러나 라우트를 타고 들어오면 실행되지 않는다.
		document.addEventListener('readystatechange', function (event) {
			console.log('document.readystatechange');
			// 여기서는 컴포넌트의 스크립트에 접근할 수 없다.
			//onReadyStateChange();
		});
	</script>

	<!-- 외부 리소스에 on:[eventName]을 사용하여 이벤트를 바인딩할 수 있다.  -->
	<!-- 그러나 둘 중에 어느 것이 먼저 로드될지는 알 수 없다. -->
	<link
		rel="stylesheet"
		href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
		on:load={onCssLoaded}
	/>

  <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
	<!-- <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" on:load={onScriptLoaded}></script> -->
	
</svelte:head>

<h1>How to use jQUery</h1>
<div id="disp" />
<button on:click={onClick}>Click</button>

<!-- refresh를 하던 라우트를 타고 들어오던 이벤트가 트리거 되지 않는다.  -->
<svelte:document on:readystatechange={onReadyStateChange} />
<p>Date: <input type="text" id="datepicker" /></p>
