<script lang="ts">

	const handleEvent = () => { 
		alert('clicked');
	}

</script>

DOM 이벤트 핸들러는 동작을 변경하는 수정자(modifiers)를 가질 수 있습니다. 예를 들어 한 번 한정자가 있는 핸들러는 한 번만 실행됩니다.
<br>
<button on:click|once={handleEvent}> Click me </button>

<br>
<ul>
	<li>
		preventDefault — 핸들러를 실행하기 전에 event.preventDefault()를 호출합니다. 예를 들어 클라이언트 측 양식 처리에 유용합니다.
	</li>
	<li>
		stopPropagation — event.stopPropagation()을 호출하여 이벤트가 다음 요소에 도달하는 것을 방지합니다.
	</li>
	<li>
		passive — 터치/휠 이벤트에서 스크롤링 성능을 향상시킵니다(Svelte는 안전한 곳에 자동으로 추가합니다).
	</li>
	<li>
		nonpassive — 명시적으로 수동 설정: false
	</li>
	<li>
		capture — 버블링 단계 대신 캡처 단계에서 처리기를 실행합니다.
	</li>
	<li>
		once — 핸들러가 처음 실행된 후 핸들러를 제거합니다.
	</li>
	<li>
		self — event.target이 요소 자체인 경우에만 핸들러를 트리거합니다.
	</li>
	<li>
	  trusted — event.isTrusted가 true인 경우에만 핸들러를 트리거합니다. 즉, 일부 JavaScript에서 element.dispatchEvent(...)를 호출했기 때문이 아니라 사용자 작업에 의해 이벤트가 트리거되었음을 의미합니다.
	</li>

</ul>
<p>
	수정자를 함께 연결할 수 있습니다. 예를들어, on:click|once|capture={`{...}.`}
</p>







