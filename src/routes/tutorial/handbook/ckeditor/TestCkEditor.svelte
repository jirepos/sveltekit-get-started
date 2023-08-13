<!-- https://www.npmjs.com/package/ckeditor5 -->
<!-- https://ckeditor.com/ckeditor-5/download/ -->
<!-- https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html -->
<!-- https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html -->
<!-- npm install --save @ckeditor/ckeditor5-markdown-gfm -->
<!-- Therefore, you must never add plugins to an existing build unless your plugin has no dependencies.
따라서 플러그인에 종속성이 없는 경우가 아니면 기존 빌드에 플러그인을 추가해서는 안 됩니다. -->

<script lang="ts">

import ClassicEditor from 'naon-ckeditor5';


	import { onMount, onDestroy } from 'svelte';
	import type { Action } from 'svelte/action';

	let editor;

	onMount(() => {
    // @ts-ignore
    // hljs.highlightAll();
  });

	onDestroy(() => {
		editor.destroy();
	});


  // const initHighlight = () => {
  //   setTimeout(() => {
  //     // @ts-ignore
  //     if(hljs) {
  //       // @ts-ignore
  //       //hljs.highlightAll();
  //       hljs.initHighlightingOnLoad();

  //     } else {
  //       initHighlight();
  //     }
  //   }, 300);
  // };

	const initEditor = (node) => {
		// setTimeout(() => {
			// @ts-ignore
			// if (ClassicEditor) {
          // @ts-ignore
				  ClassicEditor.create(node, {
					// plugins: [ Bold, Italic ],
					// toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ]
					// toolbar: [  'bold', 'italic' ]
					 ckfinder: {
					    uploadUrl: 'http://localhost/tutorial/file/image-upload'
				   }
				})
					.then((newEditor) => {
						console.log(newEditor);
						editor = newEditor;
            editor.model.document.on('change:data', () => {
              console.log(editor.getData());
              // initHighlight();
              document.querySelectorAll('pre code').forEach((block) => {
              // @ts-ignore
		     	      //  hljs.highlightBlock(block);
		          });
            });
					})
					.catch((error) => {
						console.error(error);
					});
		// 	} else {
		// 		initEditor(node);
		// 	}
		// }, 1000);
	};

	const createEditor: Action<Element> = (node) => {
		// // @ts-ignore
    initEditor(node);
		// ClassicEditor.create(node, {
		// 			// plugins: [ Markdown, Essentials, Bold, Italic ],
		// 			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ]
		// 			// toolbar: [  'bold', 'italic' ]
		// 		})
		// 			.then((newEditor) => {
		// 				console.log(newEditor);
		// 				editor = newEditor;
    //         editor.model.document.on('change:data', () => {
    //           console.log(editor.getData());
    //           // initHighlight();
    //           document.querySelectorAll('pre code').forEach((block) => {
    //           // @ts-ignore
		//      	      //  hljs.highlightBlock(block);
		//           });
    //         });
		// 			})
		// 			.catch((error) => {
		// 				console.error(error);
		// 			});



	};

	const getData = () => {
		console.log(editor.getData());
	};
	const setData = () => {
		editor.setData('<p>Hello world!</p>');
	};
</script>

<svelte:head>
	<script>
		if (global === undefined) {
        var global = window;
    }
	</script>

	
</svelte:head>


<div>
	<button on:click={getData}>getData()</button>
	<button on:click={setData}>setData()</button>
</div>
<div use:createEditor id="editor" />
