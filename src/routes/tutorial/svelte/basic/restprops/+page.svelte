<script>
	import UserTable from './UserTable.svelte'
	import RestPropsButton from './RestPropsButton.svelte'


	
	let user = {
		name: 'John',
		age: 42,
		website: 'https://svelte.dev'
	}


	let buttonProps = { 
		name: 'btn1',
		id: 'btn1', 
		class: 'btn1',
	}

</script>

<UserTable address={ 'Seoul' }   {...user} />
<hr>
<!-- spread props를 사용하여 전달  -->
<RestPropsButton {...buttonProps}>
	<div>
		Click Me!!
	</div>
</RestPropsButton>

