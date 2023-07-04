<script lang="ts">
	// Organization Module의 Left Navication Pane입니다.

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// DOM Event handler 
	const onClick = () => { 
		console.log("clicked");
		// alert("clicked");
		
		// emit custom event 
		// dispatch()을 콜하여 이벤트를 발생시킵니다. 
		dispatch('menu-selected', {
			menuId: 'org-list'
		});
	}
</script>

<div>
	<h3 >
		<!-- a tag는 '#id'를 사용해야 웹접근성 a11y 경고가 나오지 않음  -->
		<!-- a tag를 버튼으로 사용하지 말아야 한다.  -->
		<!-- <a href="#dummyid" on:click={onClick}>Organization Left Navication</a> -->
		<button class="btn btn-link" on:click={onClick}>Organization Left Navigation</button> 
	</h3>
</div>