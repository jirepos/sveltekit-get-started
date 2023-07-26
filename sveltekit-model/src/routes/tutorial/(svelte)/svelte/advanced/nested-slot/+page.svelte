<script>
	import Foo from './Foo.svelte'
	import Bar from './Bar.svelte'
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
	<span slot="content">bar custom</span>
</Bar>