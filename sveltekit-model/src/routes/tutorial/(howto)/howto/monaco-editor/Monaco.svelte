<script lang="ts">

  // https://stackoverflow.com/questions/70780678/using-monaco-editor-in-svetle-with-rollup
  // https://dev.to/lawrencecchen/monaco-editor-svelte-kit-572

  import type monaco from 'monaco-editor';
  import { onMount } from 'svelte';
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
  import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
  import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
  import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
  import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

  let divEl: HTMLDivElement;
  let editor: monaco.editor.IStandaloneCodeEditor;
  let Monaco;

  async function loadMonaco() {
       // @ts-ignore
       self.MonacoEnvironment = {
          getWorker: function (_moduleId: any, label: string) {
              if (label === 'json') {
                  return new jsonWorker();
              }
              if (label === 'css' || label === 'scss' || label === 'less') {
                  return new cssWorker();
              }
              if (label === 'html' || label === 'handlebars' || label === 'razor') {
                  return new htmlWorker();
              }
              if (label === 'typescript' || label === 'javascript') {
                  return new tsWorker();
              }
              return new editorWorker();
          }
      };

      Monaco = await import('monaco-editor');
      editor = Monaco.editor.create(divEl, {
          value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
          language: 'javascript'
      });

      return () => {
          editor.dispose();
      };
  }
  
  onMount(  () => {
    let promise = loadMonaco();
  });
</script>

<hr>
<div bind:this={divEl} class="h-screen" />

<style>
  .h-screen {
      height: 100vh;
      width: 100vw;
  }
</style>