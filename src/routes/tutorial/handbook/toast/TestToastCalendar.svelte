<script lang="ts">
	/* ES6 module in Node.js environment */
	import Calendar from '@toast-ui/calendar';
	import '@toast-ui/calendar/dist/toastui-calendar.min.css';
	import { onMount } from 'svelte';

	const initCalendar = () => {
			// const Calendar = tui.Calendar;
      // const calendar = new tui.Calendar('#calendar', {
			// @ts-ignore
			const calendar = new Calendar('#calendar', {
				defaultView: 'month',
				calendars: [
					{
						id: 'cal1',
						name: 'Personal',
						backgroundColor: '#03bd9e'
					},
					{
						id: 'cal2',
						name: 'Work',
						backgroundColor: '#00a9ff'
					}
				]
			});
			calendar.setOptions({
				useFormPopup: true,
				useDetailPopup: true
			});
		};

	onMount(() => {
		initCalendar();
	});
</script>
<div id="calendar" style="height: 800px" />
<svelte:head>
  <title>Toast UI Calendar</title>
</svelte:head>

