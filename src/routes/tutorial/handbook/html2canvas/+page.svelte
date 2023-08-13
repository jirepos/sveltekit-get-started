<script>
  // https://www.npmjs.com/package/html2canvas
  // https://html2canvas.hertzen.com
  
  import html2canvas from 'html2canvas';
  import { onMount } from 'svelte';
  let canvasTarget; 

  onMount( () => {
    html2canvas(document.body).then(function(canvas) {
      // document.body.appendChild(canvas);
      canvasTarget.appendChild(canvas); 
    });
  });

</script>
<h3>html2canvas</h3>

Examples
For more information and examples, please visit the homepage or try the test console.

Contributing
If you wish to contribute to the project, please send the pull requests to the develop branch. 
Before submitting any changes, try and test that the changes work with all the support browsers. 
If some CSS property isn't supported 
or is incomplete, please create appropriate tests for it as well before submitting any code changes.

<strong>
스크립트가 사용하는 모든 이미지는 프록시의 도움 없이 읽을 수 있도록 동일한 출처에 있어야 합니다. 
마찬가지로 페이지에 교차 출처 콘텐츠로 오염된 다른 캔버스 요소가 있는 경우 더러워지고 더 이상 
html2canvas에서 읽을 수 없습니다.
</strong>

<img src="/resources/tutorial/images/yirae2.png"  alt="The glory" >

<div bind:this={canvasTarget}>

</div>

