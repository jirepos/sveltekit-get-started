<script>
  // $types.d.ts 파일로부터 임포트합니다. 
  // 이것은 TypeScript를 사용하는 경우 SvelteKit이 숨겨진 디렉토리에 생성하는 파일입니다.
  // 루트 파일로 작업할 때 형식 안전성을 제공합니다.
  // https://kit.svelte.dev/docs/routing#$types
	/** @type {import('./$types').PageData} */
   export let data;  // +page.ts에서 반환한 데이터 
</script>

<h3>+page.ts 사용</h3>
<h4>{data.userId}</h4>