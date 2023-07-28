<script lang="ts">
	let src = '/resources/tutorial/images/yirae2.png';
	let name = 'Yirae';
</script>

<!-- 중괄호를 사용하여 텍스트를 제어할 수 있는 것처럼 요소 특성을 제어하는 ​​데 사용할 수 있습니다. -->
<!-- src={src}와 같이 이름과 값이 동일한 속성을 갖는 것은 드문 일이 아닙니다. Svelte는 다음과 같은 경우에 편리한 속기를 제공합니다. -->
<img {src} alt="{name} dances." />