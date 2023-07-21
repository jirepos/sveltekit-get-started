<script lang="ts">
	import BoardMain from '$src/lib/biz/components/module/board/BoardMain.svelte';
	/** @type {import('./$types').PageData} */
	export let data: any; // +page.ts에서 반환한 데이터
</script>

게시판 아이디 {data.boardId}
<BoardMain />
