<script>
	let m = { x: 0, y: 0 };

	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>


이미 간략하게 살펴본 것처럼 on: 지시문을 사용하여 요소의 모든 DOM 이벤트(예: click 또는 pointermove)를 수신할 수 있습니다.

<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>





