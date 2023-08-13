<script lang="ts">

	import { onMount , onDestroy } from 'svelte';
  import { fabric } from "fabric";

	let canvasEle;
  let canvas;


	onMount(() => {
    canvas = new fabric.Canvas('canvas');
    let rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        });
        canvas.add(rect);
	});

  onDestroy(() => {
    canvasEle = null;
    canvas.dispose();

  });




</script>

<canvas  bind:this={canvasEle}  id="canvas" width="300" height="300"></canvas>