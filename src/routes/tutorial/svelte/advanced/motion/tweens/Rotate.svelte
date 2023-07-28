<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const tweenConfig =  {
		duration: 1000,
		easing: cubicOut
	};

  const rotate = tweened(0, tweenConfig); 
  const radius = tweened(0, tweenConfig); 

  const transform = () => { 
    $rotate = 720; 
    $radius = 100;
  }
</script>

<div on:click={transform} 
    style="height: 300px;background-color:yellow; transofrm: rotate({$rotate}deg);
           border-radius: {$radius}%">
</div>
