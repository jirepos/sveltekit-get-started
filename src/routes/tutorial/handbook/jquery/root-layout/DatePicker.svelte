<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	// import jQuery from 'jquery';
  // import 'jquery-ui';

	let pickerId = Date.now().toString() + Math.random().toString().slice(2);

	onMount(() => {
		console.log('onMount');
		setDatePicker();
	});

	const setDatePicker = () => {
		if (browser) {
			setTimeout(() => {
				// @ts-ignore
				if (window.jQuery && window.jQuery.fn.datepicker) {
					// @ts-ignore
					window.jQuery('#' + pickerId).datepicker();
					// jQuery('#' + pickerId).datepicker();
					// or
					// window.$
				} else {
					console.log('jQuery is not defined');
					setDatePicker();
				}
			}, 100);
		}
	};
</script>

<p>Date: <input type="text" id={pickerId} /></p>
