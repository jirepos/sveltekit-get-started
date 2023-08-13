<script lang="ts">
	import EmailMain from '$app/gw/components/module/email/EmailMain.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any; // +page.ts에서 반환한 데이터
</script>

몌일박스 아이디 {data.mailBoxId}
<EmailMain />
