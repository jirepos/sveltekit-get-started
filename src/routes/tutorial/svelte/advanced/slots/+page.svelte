<script lang="ts">
  // Slot 테스트용 컴포넌트 
	import SimpleSlot from './SimpleSlot.svelte';
	import NamedSlot from './NamedSlot.svelte';
	import PropsSlot from './PropsSlot.svelte';
	import PropsSlot2 from './PropsSlot2.svelte';
  import SlotNameRef from './SlotNameRef.svelte';

	// slot에 값을 전달할 배열 변수 
  let items: any[] = [
    {text: 'a'},
    {text: 'b'},
    {text: 'c'}
  ];

</script>

<h3>Slots</h3>
<hr />

<!-- Simple Slot  -->
<SimpleSlot>
	<p>이 컨텐트가 slot에 표시될 것입니다.</p>
</SimpleSlot>


<hr>
<!-- Name Slot  -->
<NamedSlot>
	<div slot="header">
    부모 컴포넌트에서 header slot에 전달하는 컨텐트입니다. 
  </div>
	<div slot="footer">부모 컴포넌트에서 footer slot에 전달하는 컨텐트입니다.</div>
</NamedSlot>

<hr>
<!-- Expose values  -->
<!--
  https://svelte.dev/tutorial/slot-props

  PropsSlot 컴포넌트의 컨텐츠에 myName을 노출하려면 let directive를 사용합니다. 
  let:propName={variable} 형태로 사용합니다. 
-->

<PropsSlot let:myName>
	{myName} 
</PropsSlot>

<!-- 변수 이름을 바꿀 수 있습니다.  -->
<PropsSlot let:myName={userName}>
	{userName}
</PropsSlot>

<hr>

<!-- slot key={value} -->
<PropsSlot2 {items} let:prop={thing}>
  <!-- 배열인 items을 prop로 전달하고, PropSlot2가 slot을 반복한다. -->
	<span>{thing.text}</span>
</PropsSlot2>

<hr>
<SlotNameRef>
  <div slot="header">
    부모 컴포넌트에서 header slot에 전달하는 컨텐트입니다.
  </div>
</SlotNameRef>