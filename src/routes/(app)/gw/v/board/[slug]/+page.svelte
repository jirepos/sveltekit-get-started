<script lang="ts">
	import BoardView from '$apps/gw/components/module/board/BoardView.svelte';

	/** @type {import('./$types').PageData} */
	export let data:any; // +page.ts에서 반환한 데이터
</script>

게시글 아이디 : {data.articleId}
<BoardView />
<hr>
