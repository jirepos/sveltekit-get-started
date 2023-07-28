/** Ajax 통신에서 오류가 발생하는 경우 이 에러를 던집니다.  */
export class AjaxError extends Error { 

  /** 응답 헤더  */
  headers?:Headers;
  /** Json Object */
  json:any; 
  /** Http Status  */
  status:number;
  /** 응답 메시지 오류 정보 */
  isJson:boolean = false; 


  /**
   * 생성자 
   * @param message 에러 메시지 
   * @param status  HTTP 상태 코드. Response.status의 값 
   * @param headers 응답 헤더. Response.headers 값 
   * @param json 에러코드와 메시지를 담고 있는 JSON Object. Response.json() 값
   */
  constructor(message: string, status:number,  headers?:Headers, json?:Promise<any>) {
    // 부모 생성자에 메시지를 전달해야 하는데 body가 json인 경우 전달할 수 없어 빈 문자열을 전달한다.
    super("");
    this.name = "AjaxError";
    if(headers) {
      this.headers = headers;
    }
    if(json) {
      this.json = json;
    }
    this.status = status; 
    if(headers) {
      this.isJson = headers.get('Content-Type')? headers.get('Content-Type')!.includes('application/json'): false; 
    }
  }
}///~



/** 
 * fetch() 함수는 두 번째 인자로 RequestInit 객체를 받습니다. fetch() 함수에 전달할 
 * RequestInit 인터페이스에 awatable 등의 필드를 추가한 인터페이스입니다. Ajax 클래스의 
 * 메소드를 사용할 경우 옵션으로 이 인터페이스의 인스턴스를 사용합니다. 
*/
export interface AjaxRequestInit extends RequestInit {
  awaitable?: boolean; // 기본은 await 하지 않는다.  
  timeout?: number;    // 타임아웃 
  isFileUpload?: boolean; // 파일 업로드 여부
  fileName?:string; // 다운로드할 파일 이름 
}

/** Http Method는 GET과 POST만 사용합니다.  */
enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

/**
 * 요청 시 헤더에 설정할 Content-Type을 나타냅니다. 
 */
enum ContentType {
  JSON = 'application/json',
  URLENCODED = 'application/x-www-form-urlencoded',
  HTML = 'text/html',
  TEXT = 'text/plain',
  XML = 'application/xml',
  MULTIPART = 'multipart/form-data',
  JAVASCRIPT = 'application/javascript',
  BINARY = 'application/octet-stream'
}

const CharSet:string = "charset=utf-8";

// HttpStaatus 
enum  HttpStatus {
    OK= 200,
    FORBIDDEN= 403,
    NOT_FOUND= 404,
    INTERNAL_SERVER_ERROR= 500,
    BAD_REQUEST= 400,
    UNAUTHORIZED= 401,
    METHOD_NOT_ALLOWED= 405,
    NOT_ACCEPTABLE= 406,
    SERVICE_UNAVAILABLE= 503,
    CONFLICT= 409
}



/**
 * API 통신 및 파일 업로드,다운로드 시 fetch() 함수를 직접 사용하지 않고 이 클래스를 사용합니다. 
 */
export class Ajax {

  /**
   * API 서버에 요청하여 application/json을 반환합니다. 
   * @param url API end point
   * @param options 요청 옵션
   * @returns  JSON
   */
  public static json(url:string, options:AjaxRequestInit):Promise<any> {
    let innerOptions:AjaxRequestInit = {
      headers: {
        'Accept': ContentType.JSON,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return Ajax.ajax(url, reqOptions);
  }//:


  /**
   * API 서버에 요청하여 text/plain을 반환합니다. 
   * @param url API end pint
   * @param options  요청 옵션 
   * @returns text
   * 
   */
  public static text(url:string, options:AjaxRequestInit):Promise<string> {
    let innerOptions:AjaxRequestInit = {
      headers: {
        'Accept': ContentType.TEXT,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return Ajax.ajax(url, reqOptions);
  }//:


  /**
   * API 서버에 요청하여 text/html을 반환합니다. 
   * @param url API end point 
   * @param options 요청 옵션 
   * @returns text/html
   */
  public static html(url:string, options:AjaxRequestInit):Promise<string> {
    let innerOptions:AjaxRequestInit = {
      headers: {
        'Accept': ContentType.HTML,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return Ajax.ajax(url, reqOptions);
  }//:


  /**
   * API 서버에 요청하여 바이너리를 Blob으로 반환합니다. 
   * @param url API end point 
   * @param options 요청 옵션
   * @returns Blob
   */
  public static blob(url:string, options:AjaxRequestInit):Promise<Blob> {
    let innerOptions:AjaxRequestInit = {
      headers: {
        'Accept': ContentType.BINARY ,
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return Ajax.ajax(url, reqOptions);
  }//:
 
    
  /**
   * API 서버에 요청하여 javascript을 document.head에 추가합니다. 
   * @param url API end point
   * @returns 성공여부 
   */
  public static javascript(url:string):Promise<{status: boolean}> {
    return new Promise((resolve, reject) => {
      try {
        const script = document.createElement('script');
        script.setAttribute('src', url);
        script.setAttribute('type', ContentType.JAVASCRIPT); 
        script.setAttribute('async', 'true');
        script.addEventListener('load', () => {
          resolve({status: true});
        });
        script.addEventListener('error', () => {
          reject({status: false});
        });
        document.head.appendChild(script);
      }catch(error) {
        console.log(error); 
        reject({status: false});
      }
    }) ;
  }//:



  public static download(url:string, options:AjaxRequestInit) :Promise<{status: boolean}>{
    let innerOptions:AjaxRequestInit = {
      headers: {
        'Accept': ContentType.BINARY,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return new Promise((resolve, reject) => {
      Ajax.ajax(url, reqOptions)
         .then((response:Blob) => {
          let a  = document.createElement('a');
          a.href = window.URL.createObjectURL(response);
          a.download = options.fileName!; // 저장할 파일 이름 
          document.body.appendChild(a);
          a.click(); 
          a.remove();
          resolve({status:true});
         })
         .catch( error => {
            console.log(error);
            reject({status:false});
          })
         .finally ( () => { 
         });
    });
  }//:

  public static upload(url:string, options:AjaxRequestInit):Promise<any> {
    debugger; 
    let innerOptions:AjaxRequestInit = {
      method: HttpMethod.POST, 
      isFileUpload: true,
      headers: {
        'Accept': ContentType.JSON                         // 'application/json',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return Ajax.ajax(url, reqOptions);
  }//:










  public static ajax(url:string, options:AjaxRequestInit):Promise<any> {
    let reqOptions = Ajax.createRequestOptions(options);
    console.log(reqOptions);
    return (options.awaitable)? Ajax.fetchAwait(url, reqOptions): Ajax.fetchNotAwait(url, reqOptions);
  }

  private static createDefaultRequestOptions(): AjaxRequestInit {
    let requestOptions:AjaxRequestInit = {    
      awaitable: true,
      method: 'GET',
      timeout: 60 * 1000 * 2,  // 타임아웃 120초
      mode: 'cors', //'no-cors',    // no-cors, cors, *same-origin // cors로 값을 설정해야 Content-Type의 값을 설정할 수 있음
      // chache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      credentials: 'include',  // 자격증명이 포함된 요청을 하려면 이 줄을 추가. 이 옵션이 없으면 쿠키 값을 서버로 보내지 않음 
      cache : 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      isFileUpload : false,
        // redirect 
        //   - manual : 리다이렉트를 허용하지 않는다.
        //   - error : 리다이렉트 응답을 에러로 처리한다.
        //   - follow : 리다이렉트 응답을 허용한다. (HTTP status code = 301,302,303,307,308)
        // fetch는 바로 redirect된 페이지로 이동이 안된다. 
        // redirect response가 왔을 때 다시 한번 해당 url로 요청을 보내야한다.           
        // response.redirected가 true일 경우, 다음 방법 중 하나를 사용해야한다.
        //  - window.location.href \= response.url
        //  - response.redirect(response.url)
        //redirect: 'follow', // manual, *follow, error
        //referrer: 'no-referrer', // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header      
    };

    return requestOptions
  }
  
  private static createRequestOptions(requestOptions:AjaxRequestInit): AjaxRequestInit { 
    let reqDefaultOptions: AjaxRequestInit = Ajax.createDefaultRequestOptions()
    debugger; 
    let reqOptions: AjaxRequestInit =  Object.assign(reqDefaultOptions, requestOptions); 
    

    if(reqOptions.body) {
      if (!reqOptions.isFileUpload) {
        if(reqOptions.headers) {
          let headers = new Headers(reqOptions.headers); 
          if(headers.get('Content-Type')?.includes(ContentType.URLENCODED)) {
            // name=kim&age=20
            reqOptions.body = new URLSearchParams(reqOptions.body as any);
          }else { 

            // let data = JSON.stringify(reqOptions.body);
            reqOptions.body = JSON.stringify(reqOptions.body);
            debugger;
            console.log(reqOptions.body); 
          }
        }
      }
    }
    return reqOptions; 
  }

  private static responseOk(response:Response):Promise<any> | null {
    debugger; 
    let contentType = Ajax.getContentType(response);
    if(!contentType) {
      return null; // REST API 호출 시 값이 없으면 Content-Type이 없음 
    }
    if(contentType.includes(ContentType.JSON)) {
      return response.json();
    }else if(contentType.includes(ContentType.TEXT)) {
      return response.text();
    }else if(contentType.includes(ContentType.HTML)) {
      return response.text();
    }else if(contentType.includes(ContentType.XML)) {
      return response.text();
    }else if(contentType.includes(ContentType.JAVASCRIPT)) {
      return response.text();
    }else if(contentType.includes(ContentType.BINARY)) {
      return response.blob();
    }else {
      // 모르는 것은 무조건 blob으로 처리
      return response.blob();
    }
  }


  private static fetchNotAwait(url:string, options:AjaxRequestInit):Promise<any> {
    return new Promise<Response>((resolve, reject) => {
      Ajax.request(url, options)
         .then(response => {
            if(response.ok) {
              return Ajax.responseOk(response);
            }else { 
              // debugger;
              Ajax.throwAjaxError(response);
            }
         })
         .then(response => { 
             resolve(response);
         })
         .catch( (error:AjaxError) => {
          // debugger;
          // The error message should be shown here 
            reject(error);
         })
         .finally(() => { 
         }); 
   });
  }//:


  private static async fetchAwait(url:string, options:AjaxRequestInit):Promise<any>   {
    try { 
      debugger; 
      let response:Response = await Ajax.request(url, options);
      if(response.ok) {
        return await Ajax.responseOk(response);
      }else { 
        Ajax.throwAjaxError(response);
      }
      console.log(response); 
    }catch(error){
      if(error instanceof AjaxError) {
        console.log("AjaxError");
        Ajax.showErorr(error);
      }else {
        console.log("Error");
        console.log(error);
      }
      // debugger; 
      throw error; 
    }finally { 
    }
    return null;
  }//:


  private static getContentType(response:Response): string | null {
    let headers:Headers = response.headers; 
    return headers.get('Content-Type');
  }


  private static throwAjaxError(response:Response): void { 
    let headers:Headers = response.headers; 
    const isJson:boolean = headers.get('Content-Type')? headers.get('Content-Type')!.includes('application/json'): false; 
    if(isJson) {
      throw new AjaxError(response.statusText, response.status, headers, response.json());
    }else {
      throw new AjaxError(response.statusText, response.status, headers);
    }
  }
  
  
  private static async request(url: string, requestOptions: AjaxRequestInit): Promise<Response> {
    const controller = new AbortController();
    // AbortController 객체의 signal 속성을 fetch()의 signal 옵션에 전달합니다.  
    requestOptions.signal = controller.signal;
    const promise:Promise<Response> = fetch(url, requestOptions);
    if (requestOptions.signal) requestOptions.signal.addEventListener("abort", () => {
      console.log("aborted"); // 요청이 취소 되었음 
    });
    const timeout = setTimeout(() => controller.abort(), requestOptions.timeout); // 시간이 경과하면 요청을 취소한다. 
    return promise.finally(() => clearTimeout(timeout));   // promise 반환, timeout 제거 
  }//:


  private static showErorr(error:AjaxError): void {
    // debugger; 
    switch(error.status) {
      case HttpStatus.INTERNAL_SERVER_ERROR: // 500
        // show error message
        alert("서버 오류가 발생했습니다."); 
        break;
      case HttpStatus.CONFLICT:  // 409
        alert("서버 오류가 발생했습니다.");
        break;
      case HttpStatus.BAD_REQUEST:  // 400
      // debugger;
        if(error.isJson) {
          // 
          error.json.then( (res: {code:String, message: string}) => {
            alert(res.code + "//" + res.message);
          });
        }
        break; 
      case HttpStatus.NOT_FOUND: //  404:
        alert("404: 잘못된 요청으로 해당된 리소스를 찾을 수 없습니다.")
        break;
      case HttpStatus.METHOD_NOT_ALLOWED: // 405:
        alert("호출 방식이 잘못되었습니다. POST/GET 방식을 확인하여 주세요.")
        break;
      case HttpStatus.NOT_ACCEPTABLE: //   406:
        alert("서버에서 요청을 허용하지 않습니다. 메서드 정의를 살펴주세요.")
        break;        
      case HttpStatus.FORBIDDEN: //   403:
        alert("권한 없음")
        break;   
      case HttpStatus.UNAUTHORIZED: //  401:
        alert("로그인 후에 이용하여 주세요")
        break;                 
    }
    
    if (error.name == "AbortError") {
      alert("요청이 취소되었습니다.");
    } else if (error instanceof TypeError) {
      alert("호출 형식이 잘못되었습니다:" + error.message);
    }
  }

}///~
