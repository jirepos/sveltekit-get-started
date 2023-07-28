<script lang="ts">

  import type { Action } from 'svelte/action';

  // Svlete에서 DOM 요소가 DOM에 추가될 때 실행되는 함수를 액션(Action)이라고 합니다. 
  // 주로 DOM 요소의 속성을 변경하는 경우 사용됩니다.
  const inputOnFocus = (node: HTMLInputElement) => {
    node.focus();
  };
  
  const inputOnFocus2: Action<HTMLInputElement> = (node) => {
    // DOM 요소가 DOM에 추가될 때
    node.value = "바인딩됨";
    return {
      destroy() {
        // DOM에서 요소가 제거 되었을 때 
        console.log("요소가 DOM에서 제거됨")
      }
    }
  };
  

  let textValue:any = "Hello World"; 

  // 파라미터를 가질 수 있습니다. 
  const inputOnFocusParam: Action<HTMLInputElement> = (node, param) => {
    // DOM 요소가 DOM에 추가될 때
    // @ts-ignore
    node.value = param; 
    return {
      // 파라미터가 변경될 때마다 호출 
      // 위 textValue가 변경되면 호출됩니다.
      update(new_param) {
        // param 값이 변경되었음 
        console.log(new_param); 
        // @ts-ignore
        node.value = new_param; 
      },
      destroy() {
        // DOM에서 요소가 제거 되었을 때 
        console.log("요소가 DOM에서 제거됨")
      }
    }
  };

  function handleEvent() {
    textValue = "값이 변경되었음"; 
  }

</script>

<h3>use:action</h3>
<p></p>
<input type="text" use:inputOnFocus />
<input type="text" use:inputOnFocus2 />
<input type="text" use:inputOnFocusParam={textValue} />
textValue: {textValue}
<button on:click={handleEvent}>Click</button>