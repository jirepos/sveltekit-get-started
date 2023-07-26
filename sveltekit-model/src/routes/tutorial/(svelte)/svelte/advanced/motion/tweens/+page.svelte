<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

  import Rotate from './Rotate.svelte';

  // Svelte에는 애니메이션을 사용하여 변경 사항을 전달하는 매끄러운 사용자 
  // 인터페이스를 구축하는 데 도움이 되는 도구가 포함되어 있습니다.
  // 진행률 저장소를 트위닝된 값으로 변경하여 시작하겠습니다.
	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

  // 트위닝에 사용할 수 있는 전체 옵션 세트
  // - delay 트윈 시작 전 밀리초
  // - duration  트윈의 지속 시간(밀리초) 또는 (from, to) => milliseconds 함수를 사용하여 
  //   (예를 들어) 값의 더 큰 변화에 대해 더 긴 트윈을 지정할 수 있습니다.
  // - easing p => t function 

</script>

<progress value={$progress} />


<!-- 버튼을 클릭하면 진행률 표시줄이 새 값으로 애니메이션됩니다. 
  그래도 약간 로봇적이고 만족스럽지 않습니다. 
  여유 기능을 추가해야 합니다. -->
<button on:click={() => progress.set(0)}>
	0%
</button>

<button on:click={() => progress.set(0.25)}>
	25%
</button>

<button on:click={() => progress.set(0.5)}>
	50%
</button>

<button on:click={() => progress.set(0.75)}>
	75%
</button>

<button on:click={() => progress.set(1)}>
	100%
</button>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>

<hr>
<hr>
<Rotate/>
<hr>