<script lang="ts">
	import DomEvents from './DOMEvents.svelte';
	import InlineHandlers from './InlineHandlers.svelte';
	import EventModifiers from './EventModifiers.svelte';
	import ComponentsEvent from './ComponentEvents.svelte';
  import EventForwarding from './EventForwarding.svelte';
  import DomEventForwarding from './DomEventForwarding.svelte';

  // 이벤트 핸들러 
	function handleMessage(event) {
    // event.datail로 전달된 데이터를 참조합니다. 
		alert(event.detail.text);
	}


  function eventForwardingHandleMessage(event) {
    // event.datail로 전달된 데이터를 참조합니다.
    alert(event.detail.text);
  }
  function handleClick() {
    alert('clicked');
  }


</script>

<DomEvents />
<hr />

<InlineHandlers />

<hr />

<EventModifiers />

<hr />
<!-- 이벤트 이름에 핸들러를 추가합니다.  -->
<ComponentsEvent on:message={handleMessage} />

<hr>
<EventForwarding on:message={eventForwardingHandleMessage} />

<hr>
<DomEventForwarding on:click={handleClick} />