<script lang="ts">

import { onMount, onDestroy } from 'svelte';

  export let id:string; 

	onMount(() => {
    console.log("onMount");
    // routes 링크를 타코 처음 들어온 경우 null이다. 
    // 화면을 리프레시하는 경우 null이 아니다.
    // @ts-ignore
    console.log(window.jQuery);
	});

	onDestroy(() => {
	});
  

	const setDatePicker = () => {
		// @ts-ignore
		if (window.jQuery) {
      console.log("setDatePicker");
      // @ts-ignore
			window.jQuery("#" + id).datepicker();
		} else {
			console.log('jQuery is not defined');
		}
	};

  // 화면을 리프레시하는 경우 onCssLoaded와 onScriptLoaded는 호출되지 않는다. 
  const onCssLoaded = () => {
    console.log('onCssLoaded');
  };
  const onJqueryLoaded = () => {
    console.log('onJqueryLoaded');
  };
  const onUiLoaded = () => {
    console.log('onUiLoaded');
    setDatePicker();
  };

  console.log("component load");

</script>

<svelte:head>
  <script></script>
	<!-- 외부 리소스에 on:[eventName]을 사용하여 이벤트를 바인딩할 수 있다.  -->
	<!-- 그러나 둘 중에 어느 것이 먼저 로드될지는 알 수 없다. -->
	<link	rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" on:load={onCssLoaded}	/>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" on:load={onJqueryLoaded}></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" on:load={onUiLoaded}></script>
</svelte:head>

<p>Date: <input type="text" id="{id}" /></p>
