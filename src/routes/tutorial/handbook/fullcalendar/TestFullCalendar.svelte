<script lang="ts">
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import timeGridPlugin from '@fullcalendar/timegrid';
	import listPlugin from '@fullcalendar/list';
	import { onMount } from 'svelte';

	let calendarEl;
  let calendar; 

	const initCalendar = () => {
		calendar = new Calendar(calendarEl, {
			plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
			initialView: 'dayGridMonth',
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,listWeek'
			},
			events: [
				{
					title: 'Event 반갑습니다',
					start: '2023-08-09T13:13:55.008',
					end: '2023-08-10T13:13:55.008'
				},
				{
					title: 'Event Title2',
					start: '2023-08-09T13:13:55-0400',
					end: '2023-08-09T13:13:55-0400'
				}
			]
		});
		calendar.render();
	};

	onMount(() => {
		initCalendar();
	});

  const onClick = () => {
    calendar.addEvent({
      title: 'Event Title3',
      start: '2023-08-20T13:13:55-0400',
      end: '2023-08-20T13:13:55-0400'
    });
  };
</script>
<button on:click={onClick}>Add Event</button>
<hr>
<div bind:this={calendarEl} />
