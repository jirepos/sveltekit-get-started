<script lang="ts">
	import { Ajax } from '$lib/framework/scripts/http/ajax';
	import type { AjaxRequestInit } from '$lib/framework/scripts/http/ajax';
	import { TutorialApiClient } from '$lib/tutorial/scripts/TutorialApiClient';

	let jsonStr: string = '';
	const onFetchJson = () => {
		TutorialApiClient.getJson()
			.then((response) => {
				console.log(response);
				jsonStr = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let respondedText: string = '';
	const onFetchText = () => {
		TutorialApiClient.getText()
			.then((response: string) => {
				respondedText = response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let respondedHtml: string = '';
	const onFetchHtml = () => {
		TutorialApiClient.getHtml()
			.then((response: string) => {
				respondedHtml = response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onFetchBlob = () => {
		TutorialApiClient.getBlob()
			.then((response: Blob) => {
				let img = document.createElement('img');
				img.src = URL.createObjectURL(response);
				document.getElementById('imageDiv')?.appendChild(img);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onFetchJavaScript = () => {
    TutorialApiClient.getJavaScript()
      .then((response:{status:boolean}) => {
        console.log(response.status); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFetchDownload = () => {
    TutorialApiClient.getDownload()
      .then((response:{status:boolean}) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  
  const onFetchUpload = () => {
    // multipart uplod 시 FormData 사용 
		let formData = new FormData();
		let input = document.getElementById('fileInput') as HTMLInputElement;
		if (!input.files) return;
		let fileList: FileList = input.files;
		Array.from(fileList).forEach((file) => {
			formData.append('file', file);
		});

		formData.append('content', 'hello');
		
		TutorialApiClient.fileUpload(formData)
			.then((response) => {
				debugger;
				console.log(typeof response);
				response?.forEach((item: any) => {
          console.log(item);
          // {absolutePath: 'f:/upload/01H5PDWMKQ449M3Q9FQBVA84EF.jpg', name: '01H5PDWMKQ449M3Q9FQBVA84EF.jpg'}
          // {absolutePath: 'f:/upload/01H5PDWMM8BT16J3HJBHSVEBRP.jpg', name: '01H5PDWMM8BT16J3HJBHSVEBRP.jpg'}
          // {absolutePath: 'f:/upload/01H5PDWMMJPFB7JCANJM6QRY9G.jpg', name: '01H5PDWMMJPFB7JCANJM6QRY9G.jpg'}
          // {absolutePath: 'f:/upload/01H5PDWMMYFR1AZPTHSR2NMXN1.jpg', name: '01H5PDWMMYFR1AZPTHSR2NMXN1.jpg'}
					
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};


	let pathVarialbleResponse:string; 

   /** Path Variable을 사용한 요청을 테스트합니다. */
	const onPathVariable = () => {
		TutorialApiClient.getPathVariable(12, 'ejin')
			.then((response) => {
				console.log(response);
				pathVarialbleResponse  = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let requestParamResponse; 
	   
	/** Path Variable을 사용한 요청을 테스트합니다. */
	const onRequestParam = () => {
		TutorialApiClient.getRequestParam(12, 'ejin')
			.then((response) => {
				console.log(response);
				requestParamResponse  = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let requestBodyResponse; 
	const onRequestBody = () => {
		TutorialApiClient.getRequestBody(12, 'ejin')
			.then((response) => {
				console.log(response);
				requestBodyResponse  = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let modelAttributeResponse
	const onModelAttribute = () => {
		TutorialApiClient.getModelAttribute(12, 'ejin')
			.then((response) => {
				console.log(response);
				modelAttributeResponse  = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// const onFetchJson = () => {
	//   let options: AjaxRequestInit = { awaitable: true };
	//   Ajax.json("http://localhost/api/v1/noauth", options)
	//       .then( (response) => {
	//         console.log(response);
	//       })
	//       .catch(error => {
	//         console.log(error);
	//       });
	// };

	// let respondedText:string = "";
	// const onFetchText = () => {
	//   let options: AjaxRequestInit = { awaitable: true };
	//   Ajax.text("http://localhost/tutorial/fetch/get-text", options)
	//       .then( (response) => {
	//         debugger;
	//         respondedText =  response;
	//         // respondedText =  response as string;  // working
	//       })
	//       .catch(error => {
	//         console.log(error);
	//       });
	// };
	// let respondedHtml:string = "";
	// const onFetchHtml = () => {
	//   let options: AjaxRequestInit = { awaitable: true };
	//   Ajax.html("http://localhost/tutorial/fetch/get-html", options)
	//       .then( (response) => {
	//         respondedHtml =  response;
	//         // respondedHtml =  response as string;  // working
	//       })
	//       .catch(error => {
	//         console.log(error);
	//       });
	// };

	// const onFetchBlob = () => {
	//   let options: AjaxRequestInit = { awaitable: true };
	//   Ajax.blob("http://localhost/tutorial/fetch/get-image-octet", options)
	//       .then( (response:Blob) => {
	//         let img = document.createElement('img');
	//         img.src = URL.createObjectURL(response);
	//         document.getElementById('imageDiv')?.appendChild(img);
	//       })
	//       .catch(error => {
	//         console.log(error);
	//       });
	// };

	// const onFetchJavaScript = () => {
	// 	Ajax.javascript('http://localhost/tutorial/fetch/fetch-javascript')
	// 		.then((response) => {})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// const onFetchDownload = () => {
	// 	let options: AjaxRequestInit = { awaitable: false, fileName: 'test.jpg' };
	// 	Ajax.download('http://localhost/tutorial/fetch/get-image-octet', options)
	// 		.then((response) => {
	// 			// ok
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// const onFetchUpload = () => {
	// 	let formData = new FormData();
	// 	let input = document.getElementById('fileInput') as HTMLInputElement;
	// 	if (!input.files) return;
	// 	let fileList: FileList = input.files;
	// 	Array.from(fileList).forEach((file) => {
	// 		formData.append('file', file);
	// 	});
	// 	formData.append('content', 'hello');

	// 	let options: AjaxRequestInit = { awaitable: false, body: formData };
	// 	Ajax.upload('http://localhost/tutorial/file/multi-upload', options)
	// 		.then((response) => {
	// 			debugger;
	// 			console.log(typeof response);
	// 			response?.forEach((item: any) => {
	// 				console.log(item);
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };


	let video:HTMLVideoElement;
	let replayBtn:HTMLButtonElement;

	const onVideoLoad = () => { 
		  //var src="/media/gominsi.mp4"
			var src = 'http://localhost/tutorial/file/video/gominsi.mp4';
			var source = document.createElement('source');
			source.setAttribute('src', src);
			source.setAttribute('type', 'video/mp4');
			video.appendChild(source);
	};
	const onReplay = () => { 
		video.loop = video.loop ? false : true;
            if (video.loop) {
                replayBtn.textContent = '반복 재생';
            } else {
                replayBtn.textContent = '반복 재생 해제 상태';
            }
	};
	
	const onVideoDown = () => { 
		if (video.networkState == video.NETWORK_LOADING) {
                // NETWORK LOADING 상태라면 경고창 표시
                alert('잠시 후 다시 시도해 주세요.');
            } else {
                window.open('/media/gominsi.mp4', 'download');
            }
	}

</script>



<h3>Fetch Function</h3>
<div>
	<button on:click={onFetchJson}>Run Ajax.json()</button> : JsonStr:{jsonStr}
</div>
<div>
	<button on:click={onFetchText}>Run Ajax.text()</button> : RespondedText:{respondedText}
</div>

<div>
	<button on:click={onFetchHtml}>Run Ajax.html()</button> : RespondedHtml:{@html respondedHtml}
</div>
<div>
	<button on:click={onFetchJavaScript}>Run Ajax.javascript()</button>
</div>

<div>
	<button on:click={onFetchDownload}>Run Ajax.download()</button>
</div>
<div>
	<input id="fileInput" name="pics" type="file" multiple />
	<button on:click={onFetchUpload}>FileUpload</button>
</div>
<div>
	<button on:click={onFetchBlob}>Run Ajax.blob()</button>
	<div id="imageDiv" />
</div>
<div>
	<button on:click={onPathVariable}>Path Variables</button>
	<br>
	Result: {pathVarialbleResponse}
</div>

<div>
	<button on:click={onRequestParam}>RequestParam</button>
	<br>
	Result: {requestParamResponse}
</div>

<div>
	<button on:click={onRequestBody}>RequestBody</button>
	<br>
	Result: {requestBodyResponse}
</div>

<div>
	<button on:click={onModelAttribute}>ModelAttribute</button>
	<br>
	Result: {modelAttributeResponse}
</div>

<div>
	<video bind:this={video} width="90%" preload="auto" controls>
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>
<div>
	<button on:click={onVideoLoad}   class="btn btn-primary">Video Load</button>
	<button on:click={onReplay}  bind:this={replayBtn}  class="btn btn-primary">반복 재생 해제 상태</button>
	<button on:click={onVideoDown}  class="btn btn-primary">다운로드</button>
</div>