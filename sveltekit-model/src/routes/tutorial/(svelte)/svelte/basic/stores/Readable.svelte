<script lang="ts">
  
	import { time, ticktock } from './stores-readable';
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h3>Readable</h3>

<div>time: {formatter.format($time)}</div>
<div>ticktock: {$ticktock}</div>

