<script>
  // $$props는 export로 선언되지 않은 항목을 포함하여 구성 요소에 전달되는 모든 항목을 참조합니다. 
  // Svelte가 최적화하기 어렵기 때문에 일반적으로 권장되지 않습니다. 그러나 드문 경우에 유용할 수 있습니다. 
  // 예를 들어 어떤 props가 구성 요소에 전달될 수 있는지 컴파일 시간에 알지 못하는 경우입니다.
	export let address; 

  // $$restProps에는 export로 선언되지 않은 props만 포함됩니다. 
  // 알 수 없는 다른 특성을 구성 요소의 요소로 전달하는 데 사용할 수 있습니다. 
  // $$props와 동일한 최적화 문제를 공유하며 마찬가지로 권장되지 않습니다.
  // spread props를 사용하여 전달된 props를 $$restProps로 사용합니다. 
	const { name, age, website } = $$restProps
</script>

<h3>$$restProps</h3>
<ul>
	<li>name : {name}</li>
	<li>age: {age}</li>
	<li>website: {website}</li>
	<li>address: {address}</li>
</ul>
<br>
<div>
 	$$props와 $$restProps 확인:
	<ul>
		<li>
		$$props: {JSON.stringify($$props)}

	</li>
	<li>
		$$restProps: {JSON.stringify($$restProps)}
	</li>
</ul>
* $restProps에는 address가 없는 것을 확인할 수 있습니다.
</div>

