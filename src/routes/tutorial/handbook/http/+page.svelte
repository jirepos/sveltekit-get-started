<script lang="ts">
	import { TutorialApiClient } from '$tutorial/scripts/api/tutorial/client/TutorialApiClient';
	import type { TutorialDto } from '$tutorial/scripts/api/tutorial/dto/TutorialDto';
	
	// 서버에 text/plain 타입을 응답으로 요청합니다. 
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
	// 서버에 application/json을 응답으로 요청합니다. 
	let jsonStr: string = '';
	const onFetchJson = () => {
		TutorialApiClient.getJson()
			.then((response) => {
				// response는 JSON 객체 입니다. 
				console.log(response);
				jsonStr = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// 서버에 applicaion/json으로 응답을 요청합니다. .then()의 response는 TutorialDto 객체입니다. 
	let jsonType:any; 
	const onFetchJsonWithType = () => {
		TutorialApiClient.getJsonWithType()
			.then((response: TutorialDto) => {
				console.log(response);
				jsonType = JSON.stringify(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// 서버에 text/html을 응답으로 요청합니다. 
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
	// 서버에 application/octet-stream을 응답으로 요청합니다. .then() 메소드에 Blob 객체가 전달됩니다.
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
	// 서버에 text/javascript을 응답으로 요청하여 로드합니다..then()에 status가 전달됩니다. 
	const onFetchJavaScript = () => {
    TutorialApiClient.getJavaScript()
      .then((response:{status:boolean}) => {
        console.log(response.status); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
	// 서버에 application/octet-stream을 응답으로 요청하여 다운로드 처리합니다. then()에 status가 전달됩니다.
  const onFetchDownload = () => {
    TutorialApiClient.getDownload()
      .then((response:{status:boolean}) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.status);
      });
  };
  // 서버에 파일을 업로드 합니다. 서버에서  application/json을 응답으로 반환한다고 가정합니다. 
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
	// 서버 API가 Spring Framework의 Path Variable을 사용하는 경우를 테스트합니다. 
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
	// 서버 API가 Spring Framework의 RequestParam을 사용하는 경우를 테스트합니다.
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
	// 서버 API가 Spring Framework의 RequestBody를 사용하는 경우를 테스트합니다.
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
	// 서버 API가 Spring Framework의 ModelAttribute를 사용하는 경우를 테스트합니다.
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
	// HttpClient를 직접 사용하는 방법을 보여줍니다. 그러나 직접 사용하지 않아야 합니다. 
	// const onFetchJson = () => {
	//   let options: AjaxRequestInit = { awaitable: true };
	//   HttpClient.json("http://localhost/api/v1/noauth", options)
	//       .then( (response) => {
	//         console.log(response);
	//       })
	//       .catch(error => {
	//         console.log(error);
	//       });
	// };
	// Video Tag를 사용하면 Partial download를 지원합니다. 서버는 Partial download를 지원해야 합니다.
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
	// Video를 반복재생하도록 설정합니다.
	const onReplay = () => { 
		video.loop = video.loop ? false : true;
            if (video.loop) {
                replayBtn.textContent = '반복 재생';
            } else {
                replayBtn.textContent = '반복 재생 해제 상태';
            }
	};
	// Video를 다운로드합니다.
	const onVideoDown = () => { 
		if (video.networkState == video.NETWORK_LOADING) {
                // NETWORK LOADING 상태라면 경고창 표시
                alert('잠시 후 다시 시도해 주세요.');
            } else {
                window.open('/media/gominsi.mp4', 'download');
            }
	}
</script>
<h3>HttpClient 사용 방법</h3>
<!-- JSON 응답 요청  -->
<div>
	<button on:click={onFetchJson}>Run HttpClient.json()</button> : JsonStr:{jsonStr}
</div>
<div>
	<button on:click={onFetchJsonWithType}>Run HttpClient.jsonWithType()</button> : jsonType:{jsonType}
</div>
<!-- text/plain 응답 요청  -->
<div>
	<button on:click={onFetchText}>Run HttpClient.text()</button> : RespondedText:{respondedText}
</div>
<!-- text/html 응답 요청 -->
<div>
	<button on:click={onFetchHtml}>Run HttpClient.html()</button> : RespondedHtml:{@html respondedHtml}
</div>
<!-- text/javascript 응답 요청 -->
<div>
	<button on:click={onFetchJavaScript}>Run HttpClient.javascript()</button>
</div>
<!-- 파일 다운로드  -->
<div>
	<button on:click={onFetchDownload}>Run HttpClient.download()</button>
</div>
<!-- 파일 업로드  -->
<div>
	<input id="fileInput" name="pics" type="file" multiple />
	<button on:click={onFetchUpload}>FileUpload</button>
</div>
<!-- 이미지 blob 처리  -->
<div>
	<button on:click={onFetchBlob}>Run HttpClient.blob()</button>
	<div id="imageDiv" />
</div>
<!-- Path Vriable 사용 -->
<div>
	<button on:click={onPathVariable}>Path Variables</button>
	<br>
	Result: {pathVarialbleResponse}
</div>
<!-- RequestParam 사용  -->
<div>
	<button on:click={onRequestParam}>RequestParam</button>
	<br>
	Result: {requestParamResponse}
</div>
<!-- RequestBody 사용  -->
<div>
	<button on:click={onRequestBody}>RequestBody</button>
	<br>
	Result: {requestBodyResponse}
</div>
<!-- ModelAttribute 사용  -->
<div>
	<button on:click={onModelAttribute}>ModelAttribute</button>
	<br>
	Result: {modelAttributeResponse}
</div>
<!-- Partial Download 사용  -->
<div>
	<video bind:this={video} width="90%" preload="auto" controls>
		Sorry, your browser doesn't support embedded videos.
		<track kind="captions">
	</video>
</div>
<div>
	<button on:click={onVideoLoad}   class="btn btn-primary">Video Load</button>
	<button on:click={onReplay}  bind:this={replayBtn}  class="btn btn-primary">반복 재생 해제 상태</button>
	<button on:click={onVideoDown}  class="btn btn-primary">다운로드</button>
</div>