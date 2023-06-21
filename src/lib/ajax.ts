

/** Custom Error  */
class AjaxError {
  /* HTTP status code */
  status: number; 
  /** 
   * https://developer.mozilla.org/en-US/docs/Web/API/Headers 
   * 
   * headers.get('Content-Type'); // application/json; charset=utf-8
   */
  headers: object;
  constructor(status:number, headers: object) {
    this.status = status;
    this.headers = headers; 
  }
}// AjaxError












