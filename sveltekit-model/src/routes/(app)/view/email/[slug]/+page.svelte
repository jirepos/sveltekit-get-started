<script lang="ts">
	import EmailView from '$src/lib/biz/components/module/email/EmailView.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any; // +page.ts에서 반환한 데이터
</script>

이메일 아이디 : {data.emailId}
<EmailView />

