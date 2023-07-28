<script>
	import Foo from './Foo.svelte'
	import Bar from './Bar.svelte'
	import MyButton from './MyButton.svelte';
</script>

Expected <em>foo fallback</em>:<br>
<Foo/><br><br>

Expected: <em>foo custom</em>:<br>
<Foo>
	<span slot="content">foo custom</span>
</Foo><br><br>

Expected: <em>bar fallback</em><br>
<Bar/><br><br>

Expected: <em>bar custom</em><br>
<Bar>
	<!-- 아래는 Bar의 slot이다.  -->
	<span slot="content">bar custom</span>
</Bar>

<hr>
MyButton 예제<br>
<hr>
<MyButton>
	<!-- fallback은 표시되지 않는다.  -->
	<h1>Button Title</h1>
</MyButton>
<hr>
<MyButton>
	<h1>Button Title</h1>
</MyButton>
