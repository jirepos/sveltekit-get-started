<script lang="ts">
  import mermaid from 'mermaid'; 
  import { onMount, afterUpdate } from 'svelte';
  // https://snyk.io/advisor/npm-package/mermaid/functions/mermaid.initialize

  mermaid.initialize({
      startOnLoad:true
  });
  onMount( () => {
    mermaid.init();
  });
  afterUpdate(() => {
  });
</script>

<div> 
  <h1>Flowchart</h1>
  <div class="mermaid">
    graph TD
    Start --> Stop 
  </div> 
  <h1>Sequence diagram</h1><div class="mermaid">
    sequenceDiagram
    participant John
    participant Alice
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great 
  </div>
  <h1>Gantt</h1>
  <div class="mermaid">
   gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
  </div>
</div>
    
     