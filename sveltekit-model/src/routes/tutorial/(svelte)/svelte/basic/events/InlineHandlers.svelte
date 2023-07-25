<script>
	let m = { x: 0, y: 0 };
</script>

이벤트 핸들러를 인라인으로 선언할 수도 있습니다.
<br>
<div
	on:pointermove={(e) => {
		m = { x: e.clientX, y: e.clientY };
	}}
>
	The pointer is at {m.x} x {m.y}
</div>

