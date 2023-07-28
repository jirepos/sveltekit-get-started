import { Ajax } from '$lib/framework/scripts/http/ajax';
import type { AjaxRequestInit } from '$lib/framework/scripts/http/ajax';
import { TutorialApiClientBase } from './TutorialApiClientBase';
import type { TutorialDto } from './dtos/TutorialDto';

/**
 * Tutorial API Client 클래스입니다. 
 * @author "ejin@gmail.coM"
 */
export class TutorialApiClient extends TutorialApiClientBase {

  /**
   * 서버에서 JSON을 반환 받습니다. 
   * @returns string을 반환합니다. 
   */
  public static async getJson(): Promise<any> {
    let options: AjaxRequestInit = { method: 'GET' };
    return await Ajax.json(TutorialApiClient.END_POINTS.GET_JSON, options);
  }//:

  public static async getJsonWithType(): Promise<TutorialDto> {
    let options: AjaxRequestInit = { method: 'GET' };
    return await Ajax.json(TutorialApiClient.END_POINTS.GET_JSON, options);
  }//:


  /**
 * 서버에서 문자열을 반환 받습니다. 
 * @returns string을 반환합니다. 
 */
  public static async getText(): Promise<string> {
    let options: AjaxRequestInit = { method: 'GET' };
    return await Ajax.text(TutorialApiClient.END_POINTS.GET_TEXT, options);
  }//:


  /**
 * 서버에서 HTML을 반환 받습니다. 
 * @returns string을 반환합니다. 
 */
  public static async getHtml(): Promise<string> {
    let options: AjaxRequestInit = { method: 'GET' };
    return await Ajax.html(TutorialApiClient.END_POINTS.GET_HTML, options);
  }//:

  /**
   * 서버에서 이미지를 반환 받습니다. 
   * @returns Blob을 반환합니다.
   */
  public static async getBlob(): Promise<Blob> {
    let options: AjaxRequestInit = {
      method: 'GET'
      , headers: { 'Content-Type': 'image/png' }
      , timeout: 10000
      , isFileUpload: true
    };
    return await Ajax.blob(TutorialApiClient.END_POINTS.GET_IMAGE_OCTET, options);
  }//:

  /**
   * 서버에서 JavaScript 다운로드하여 로드합니다. 
   * @returns 성공여부 
   */
  public static async getJavaScript(): Promise<{status:boolean}> {
    return await Ajax.javascript(TutorialApiClient.END_POINTS.GET_JAVASCRIPT);
  }//:


  /**
   * 파일을 다운로드 받습니다. 
   * @returns 성공여부
   */
  public static async getDownload(): Promise<{status:boolean}> {
    let options: AjaxRequestInit = {
      method: 'GET'
      ,fileName: "test.jpg"
    };
    return await Ajax.download(TutorialApiClient.END_POINTS.GET_DOWNLOAD, options);
  }//:

  /**
   * 파일을 업로드합니다. 
   * @param formData 전송할 multipart 데이터 
   * @returns 업로드된 파일 정보 
   */
  public static async fileUpload(formData:FormData): Promise<any> {
    let options: AjaxRequestInit = {
      body: formData 
    };
    return await Ajax.upload(TutorialApiClient.END_POINTS.FILE_UPLOAD, options);
  }


  public static async getPathVariable(age:number,name:string): Promise<any> {
    let options: AjaxRequestInit = { method: 'GET' };
    let url =  `${TutorialApiClient.END_POINTS.PATH_VARIABLE}/${age}/${name}`;
    return await Ajax.json(url, options);
  }//:

  public static async getRequestParam(age:number,name:string): Promise<any> {
    let options: AjaxRequestInit = { method: 'GET' };
    let url =  `${TutorialApiClient.END_POINTS.REQUEST_PARAM}?age=${age}&name=${name}`;
    return await Ajax.json(url, options);
  }//:
  public static async getRequestBody(age:number,name:string): Promise<any> {
    let options: AjaxRequestInit = { 
      method: 'POST',
      body: { 
        age: age,
        userName: name
      } as any
    };
    return await Ajax.json(TutorialApiClient.END_POINTS.REQUEST_BODY, options);
  }//:

  public static async getModelAttribute(age:number,name:string): Promise<any> {
    let options: AjaxRequestInit = { 
      method: 'GET',
    };
    let url =  `${TutorialApiClient.END_POINTS.MODEL_ATTRIBUTE}?age=${age}&userName=${name}`;
    return await Ajax.json(url, options);
  }//:


}///~