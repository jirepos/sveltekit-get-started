<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
  export let id: string;

	onMount(() => {

    console.log(document.getElementById(id));
    // @ts-ignore
    console.log(window.jQuery);

    // @ts-ignore
		if (!window.jQuery) {
      let cssUrl = "//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css";
      loadCss(cssUrl);

			loadScript('https://code.jquery.com/jquery-3.6.0.min.js', () => {
        console.log('jQuery loaded');
        loadScript('https://code.jquery.com/ui/1.13.2/jquery-ui.js', () => {
          console.log("jQuery UI loaded");
          // @ts-ignore
          window.jQuery("#" + id).datepicker();
        })
      });
		}else {
      console.log('jQuery already loaded');
      // @ts-ignore
      window.jQuery("#" + id).datepicker();
    }
	});

  
	/** 동적으로 스크립트를 로드한다. */
	const loadScript = (url: string, callback: any) => {
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
	}; //:

  const loadCss = ( url: string) => {
    // 	<link	rel="stylesheet"	href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
  }


</script>

<p>Date: <input type="text" id="{id}" /></p>