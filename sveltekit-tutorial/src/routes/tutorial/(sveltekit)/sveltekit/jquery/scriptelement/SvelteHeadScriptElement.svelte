<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let id:string; 

	onMount(() => {
		// onMount 라이프사이클 훅이 실행된 이후에만 window 객체를 참조할 수 있다. 
		// @ts-ignore
		window.windowCallback = windowCallback; // window에 함수 등록 
		windowCallback();
	});

	onDestroy(() => {
		// 화면 리프레시할 때는 onDestroy가 실행되지 않는다.
		console.log('onDestroy');
	});

	const windowCallback = () => { 
		// jQuery가 있는지 확인한다 
		// @ts-ignore
		if(window.jQuery) {
			// @ts-ignore
			window.jQuery('#' + id).html('jQuery is loaded');
		}
	};

</script>

<svelte:head>
	<title>jQuery Dynamic Load Test</title>
	<script>
		// 여기서는 let 이나 const를 사용하지 말아야 한다. 
		// 화면을 리프레시하는 경우 already defined 에러가 발생한다.
		// var 또는 function을 사용해야 한다.
		
		/** 동적으로 스크립트를 로드한다. */
		function loadScript(url, callback) {
			// console.log('loadScript');
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
			script.onload = () => {
				// 스크립트가 로드되면 callback()을 호출한다. 
				callback();
			};
			// document.body는 null로 오류가 발생한다. 
			// 아래 코드를 사용한다. 
			document.getElementsByTagName('head')[0].appendChild(script);
		}
		
		var url = 'https://code.jquery.com/jquery-3.6.0.min.js';

		// routes 링크를 타고 들어온 경우, 처음으로 이 컴포넌트를 호출하는 경우가 아니면
		// window.jQuery가 이미 존재한다. 
		// 이 경우에는 loadScript()를 호출하지 않는다.
		if (!window.jQuery) {
			loadScript(url, () => {
				let timerId = setTimeout(() => {
					// svelte의 <script> 태그에서 window.windowCallback을 설정한다. 
					// 직접 svelte의 <script> 태그 안의 함수를 호출할 수 없다. 
					// 따라서, window 객체에 설정한 함수를 호출한다. 
					// 이 함수가 svelte 컴포넌트의 onMount 보다 먼저 실행되므로 
					// onMount가 실행될 때까지 기다린다. 
					// @ts-ignore
					if(window.windowCallback) {
						// onMount에서 windowCallback 함수를 등록했는지 확인한다. 
						window.windowCallback();
						clearTimeout(timerId);
					}
				}, 300);
			});
		}
	</script>
</svelte:head>

<h1>How to use jQUery</h1>
<div id="{id}" />