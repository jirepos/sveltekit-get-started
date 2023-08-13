/** Http 통신에서 오류가 발생하는 경우 이 에러를 던집니다.  */
export class HttpError extends Error { 

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
    this.name = "HttpError";
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
 * RequestInit 인터페이스에 awatable 등의 필드를 추가한 인터페이스입니다. HttpClient 클래스의 
 * 메소드를 사용할 경우 옵션으로 이 인터페이스의 인스턴스를 사용합니다. 
*/
export interface HttpRequestInit extends RequestInit {
  /** 
   * 기본적으로 서버 요청은 응답이 올 때까지 기다리지 않습니다. 
   * 이 값을 true로 설정하면 await fetch()를 실행하여 응답을 기다립니다.  
   */
  awaitable?: boolean; // 기본은 await 하지 않는다.  
  /** 
   * 서버의 응답을 지정한 시간까지 기다립니다. 
   * 단위는 밀리초입니다. 기본값은 120초입니다. 
   */
  timeout?: number;    // 타임아웃 
  /** 파일업로드 시 true로 설정합니다.  */
  isFileUpload?: boolean; // 파일 업로드 여부
  /** 파일 다운로드 시 저장할 파일명을 설정합니다. */
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

/** HTTP response staus codes */
enum  HttpStatus {
  /** 정상 응답  */
    OK= 200,
    /** 권한 없음 */
    FORBIDDEN= 403,
    /** 요청 자원 없음 */
    NOT_FOUND= 404,
    /** 시스템 오류 */
    INTERNAL_SERVER_ERROR= 500,
    /** 잘못된 요청 */
    BAD_REQUEST= 400,
    /** 인증되지 않음  */
    UNAUTHORIZED= 401,
    /** 요청 메소드 허용하지 않음 */
    METHOD_NOT_ALLOWED= 405,
    /** 잘못된 요청  */
    NOT_ACCEPTABLE= 406,
    /** 서버 접근 안됨  */
    SERVICE_UNAVAILABLE= 503,
    /** 서버의 상태와 충돌 */
    CONFLICT= 409
}
/**
 * API 통신 및 파일 업로드,다운로드 시 fetch() 함수를 직접 사용하지 않고 이 클래스를 사용합니다. 
 */
export class HttpClient {

  /**
   * API 서버에 요청하여 application/json을 반환합니다. 
   * @param url API end point
   * @param options 요청 옵션
   * @returns  JSON
   */
  public static json(url:string, options:HttpRequestInit):Promise<any> {
    let innerOptions:HttpRequestInit = {
      headers: {
        'Accept': ContentType.JSON,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return HttpClient.fetch(url, reqOptions);
  }//:
  /**
   * API 서버에 요청하여 text/plain을 반환합니다. 
   * @param url API end pint
   * @param options  요청 옵션 
   * @returns text
   * 
   */
  public static text(url:string, options:HttpRequestInit):Promise<string> {
    let innerOptions:HttpRequestInit = {
      headers: {
        'Accept': ContentType.TEXT,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return HttpClient.fetch(url, reqOptions);
  }//:
  /**
   * API 서버에 요청하여 text/html을 반환합니다. 
   * @param url API end point 
   * @param options 요청 옵션 
   * @returns text/html
   */
  public static html(url:string, options:HttpRequestInit):Promise<string> {
    let innerOptions:HttpRequestInit = {
      headers: {
        'Accept': ContentType.HTML,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return HttpClient.fetch(url, reqOptions);
  }//:
  /**
   * API 서버에 요청하여 바이너리를 Blob으로 반환합니다. 
   * @param url API end point 
   * @param options 요청 옵션
   * @returns Blob
   */
  public static blob(url:string, options:HttpRequestInit):Promise<Blob> {
    let innerOptions:HttpRequestInit = {
      headers: {
        'Accept': ContentType.BINARY ,
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return HttpClient.fetch(url, reqOptions);
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
  /**
   * 파일을 다운로드 합니다. 
   * @param url API end point
   * @param options 요청 옵션
   * @returns 성공 실패 여부 
   */
  public static download(url:string, options:HttpRequestInit) :Promise<{status: boolean}>{
    let innerOptions:HttpRequestInit = {
      headers: {
        'Accept': ContentType.BINARY,                         // 'application/json',
        'Content-Type': ContentType.JSON + ";" + CharSet    // 'application/json; charset=utf-8',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return new Promise((resolve, reject) => {
      HttpClient.fetch(url, reqOptions)
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

  /**
   * 파일을 업로드 합니다. 
   * @param url API end point
   * @param options 요청 옵션
   * @returns 서버에서 반환한 JSON 
   */
  public static upload(url:string, options:HttpRequestInit):Promise<any> {
    debugger; 
    let innerOptions:HttpRequestInit = {
      method: HttpMethod.POST, 
      isFileUpload: true,
      headers: {
        'Accept': ContentType.JSON                         // 'application/json',
      }
    }
    let reqOptions = Object.assign(innerOptions, options);
    return HttpClient.fetch(url, reqOptions);
  }//:


  /**
   * API 서버에 요청합니다. 서버에 요청 시 text(), json(), html(), blob() 등의 메소드를 사용하세요. 다만,
   * 이러한 메소드를 사용할 수 없는 경우에 이 메소드를 사용합니다. 
   * @param url API end point
   * @param options 요청 옵션 
   * @returns 서버에서 반환한 데이터
   */
  public static fetch(url:string, options:HttpRequestInit):Promise<any> {
    let reqOptions = HttpClient.createRequestOptions(options);
    console.log(reqOptions);
    return (options.awaitable)? HttpClient.fetchAwait(url, reqOptions): HttpClient.fetchNotAwait(url, reqOptions);
  }

  /**
   * 디폴트 요청 옵션을 생성합니다. 
   * @returns HttpRequestInit 인스턴스
   */
  private static createDefaultRequestOptions(): HttpRequestInit {
    let requestOptions:HttpRequestInit = {    
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
  /**
   * 파라미터로 전달된 요청 옵션을 디폴트 옵션에 머지하여 반환합니다. 파라미터에 설정된 속성이 디폴트 속성의 값을 
   * 엎어 씁니다. 요청 body가 json이면 JSON.stringify()를 호출하여 문자열로 변환합니다.
   * @param requestOptions 요청 옵션 
   * @returns HttpRequestInit 인스턴스
   */
  private static createRequestOptions(requestOptions:HttpRequestInit): HttpRequestInit { 
    let reqDefaultOptions: HttpRequestInit = HttpClient.createDefaultRequestOptions()
    debugger; 
    let reqOptions: HttpRequestInit =  Object.assign(reqDefaultOptions, requestOptions); 
    

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
  /**
   * 응답 데이터 유형이 json이면 json을 반환합니다. text이면 text를 반환하고,
   * binary이면 blob을 반환합니다.응답이 성공일 때 호출됩니다. 유형이 파악되지 
   * 않으면 blob으로 반환합니다. 
   * @param response 응답 객체 
   * @returns  응답 값 
   */
  private static responseOk(response:Response):Promise<any> | null {
    debugger; 
    let contentType = HttpClient.getContentType(response);
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
  /**
   * 비동기로 fetch() 함수를 호출합니다. 내부적으로 request() 메소드를 호출합니다. 
   * @param url API end point 
   * @param options 요청 옵션
   * @returns 서버 응답 데이터
   */
  private static fetchNotAwait(url:string, options:HttpRequestInit):Promise<any> {
    return new Promise<Response>((resolve, reject) => {
      HttpClient.request(url, options)
         .then(response => {
            if(response.ok) {
              return HttpClient.responseOk(response);
            }else { 
              // debugger;
              HttpClient.throwHttpError(response);
            }
         })
         .then(response => { 
             resolve(response);
         })
         .catch( (error:HttpError) => {
          // debugger;
          // The error message should be shown here 
            reject(error);
         })
         .finally(() => { 
         }); 
   });
  }//:
  /**
   * fetch() 함수를 호출하고 응답을 기다립니다. 
   * @param url API end point
   * @param options 요청 옵션 
   * @returns 서버 응답 데이터
   */
  private static async fetchAwait(url:string, options:HttpRequestInit):Promise<any>   {
    try { 
      debugger; 
      let response:Response = await HttpClient.request(url, options);
      if(response.ok) {
        return await HttpClient.responseOk(response);
      }else { 
        HttpClient.throwHttpError(response);
      }
      console.log(response); 
    }catch(error){
      if(error instanceof HttpError) {
        console.log("HttpError");
        HttpClient.showErorr(error);
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
  /**
   * 컨텐트 타입을 구합니다.
   * @param response 응답 객체 
   * @returns 컨텐트 타입
   */
  private static getContentType(response:Response): string | null {
    let headers:Headers = response.headers; 
    return headers.get('Content-Type');
  }
  /**
   * HttpError를 생성하여 예외를 던집니다.
   * @param response 응답 객체
   */
  private static throwHttpError(response:Response): void { 
    let headers:Headers = response.headers; 
    const isJson:boolean = headers.get('Content-Type')? headers.get('Content-Type')!.includes('application/json'): false; 
    if(isJson) {
      throw new HttpError(response.statusText, response.status, headers, response.json());
    }else {
      throw new HttpError(response.statusText, response.status, headers);
    }
  }
  /**
   * 실제 fetch()를 호출하여 응답을 반환합니다. 내부적으로 timeout을 설정하고 설정된 시간 내에 
   * 응답이 없으면 요청을 취소합니다.
   * @param url API end point
   * @param requestOptions 요청 옵션 
   * @returns Promise<Response>
   */
  private static async request(url: string, requestOptions: HttpRequestInit): Promise<Response> {
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
  /**
   * 응답에 오류가 있으면 HttpError를 던집니다. 이 메소드에서 에러를 처리합니다. 에러처리의 
   * 세부적인 방법은 차후 수정할 예정입니다.
   * @param error HttpError 객체
   */
  private static showErorr(error:HttpError): void {
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