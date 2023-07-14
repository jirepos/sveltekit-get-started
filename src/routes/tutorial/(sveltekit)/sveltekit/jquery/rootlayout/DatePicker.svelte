<script>

  	import { onMount, onDestroy } from 'svelte';
    let pickerId = Date.now().toString() + Math.random().toString().slice(2);

    onMount(() => {
      console.log("onMount");
      setDatePicker();
    });

    
    const setDatePicker = () => {
		// @ts-ignore
		if (window.jQuery) {
      // @ts-ignore
			window.jQuery("#" + pickerId).datepicker();
			// or
			// window.$
		} else {
			console.log('jQuery is not defined');
		}
	};


</script>

<p>Date: <input type="text" id="{pickerId}" /></p>


