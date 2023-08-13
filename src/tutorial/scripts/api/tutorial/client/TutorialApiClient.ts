import { HttpClient } from '$lib/framework/scripts/http/HttpClient';
import type { HttpRequestInit } from '$src/lib/framework/scripts/http/HttpClient';
import { TutorialBaseApiClient } from './TutorialBaseApiClient';
import type { TutorialDto } from '../dto/TutorialDto';

/**
 * Tutorial API Client입니다. 
 */
export class TutorialApiClient extends TutorialBaseApiClient {

  /**
   * 서버에서 JSON을 응답으로 받아 JSON 객체로 변환합니다.
   * @returns JSON 객체
   */
  public static async getJson(): Promise<any> {
    let options: HttpRequestInit = { method: 'GET' };
    return await HttpClient.json(TutorialApiClient.END_POINTS.GET_JSON, options);
  }//:
  /**
   * 서버에서 JSON을 응답으로 받아 TutorialDto 객체로 변환합니다.
   * @returns TutorialDto 객체
   */
  public static async getJsonWithType(): Promise<TutorialDto> {
    let options: HttpRequestInit = { method: 'GET' };
    return await HttpClient.json(TutorialApiClient.END_POINTS.GET_JSON, options);
  }//:
  /**
  * 서버에서 문자열을 응답으로 받습니다. 
  * @returns string 
  */
  public static async getText(): Promise<string> {
    let options: HttpRequestInit = { method: 'GET' };
    return await HttpClient.text(TutorialApiClient.END_POINTS.GET_TEXT, options);
  }//:
  /**
  * 서버에서 HTML을 응답으로 받습니다. 
  * @returns string을 반환합니다. 
  */
  public static async getHtml(): Promise<string> {
    let options: HttpRequestInit = { method: 'GET' };
    return await HttpClient.html(TutorialApiClient.END_POINTS.GET_HTML, options);
  }//:

  /**
   * 서버에서 이미지를 응답으로 받아 Blob으로 변환합니다.
   * @returns Blob
   */
  public static async getBlob(): Promise<Blob> {
    let options: HttpRequestInit = {
      method: 'GET'
      // , headers: { 'Content-Type': 'image/png' }
      , timeout: 10000
    };
    return await HttpClient.blob(TutorialApiClient.END_POINTS.GET_IMAGE_OCTET, options);
  }//:

  /**
   * 서버에서 JavaScript 다운로드하여 로드합니다. 
   * @returns 성공여부 
   */
  public static async getJavaScript(): Promise<{ status: boolean }> {
    return await HttpClient.javascript(TutorialApiClient.END_POINTS.GET_JAVASCRIPT);
  }//:
  /**
   * 파일을 다운로드 받습니다. 
   * @returns 성공여부
   */
  public static async getDownload(): Promise<{ status: boolean }> {
    let options: HttpRequestInit = {
      method: 'GET'
      , fileName: "test.jpg"
    };
    return await HttpClient.download(TutorialApiClient.END_POINTS.GET_DOWNLOAD, options);
  }//:

  /**
   * 파일을 업로드합니다. 
   * @param formData 전송할 multipart 데이터 
   * @returns 업로드된 파일 정보 
   */
  public static async fileUpload(formData: FormData): Promise<any> {
    let options: HttpRequestInit = {
      body: formData
    };
    return await HttpClient.upload(TutorialApiClient.END_POINTS.FILE_UPLOAD, options);
  }
  /**
   * 서버 API가 Spring Framework Path Variable을 사용하는 경우 호출하는 방법을 보여줍니다.
   * @param age 나이 
   * @param name 이름
   * @returns JSON 객체 
   */
  public static async getPathVariable(age: number, name: string): Promise<any> {
    let options: HttpRequestInit = { method: 'GET' };
    let url = `${TutorialApiClient.END_POINTS.PATH_VARIABLE}/${age}/${name}`;
    return await HttpClient.json(url, options);
  }//:
  /**
   * 서버 API가 Spring Framework RequestParam을 사용하는 경우 쿼리 스트링으로 호출하는 방법을 보여줍니다.
   * @param age 나이
   * @param name 이름
   * @returns JSON 객체 
   */
  public static async getRequestParam(age: number, name: string): Promise<any> {
    let options: HttpRequestInit = { method: 'GET' };
    let url = `${TutorialApiClient.END_POINTS.REQUEST_PARAM}?age=${age}&name=${name}`;
    return await HttpClient.json(url, options);
  }//:
  /**
   * 서버 APIrk Spring Framework RequestBody를 사용하는 경우 호출하는 방법을 보여줍니다.  
   * @param age 나이
   * @param name 이름
   * @returns JSON 객체 
   */
  public static async getRequestBody(age: number, name: string): Promise<any> {
    let options: HttpRequestInit = {
      method: 'POST',
      body: {
        age: age,
        userName: name
      } as any
    };
    return await HttpClient.json(TutorialApiClient.END_POINTS.REQUEST_BODY, options);
  }//:
  /**
   * 서버 API가 Spring Framework Model Attribute를 사용하는 경우 호출하는 방법을 보여줍니다.
   * @param age 나이 
   * @param name 이름
   * @returns JSON 객체
   */
  public static async getModelAttribute(age: number, name: string): Promise<any> {
    let options: HttpRequestInit = {
      method: 'GET',
    };
    let url = `${TutorialApiClient.END_POINTS.MODEL_ATTRIBUTE}?age=${age}&userName=${name}`;
    return await HttpClient.json(url, options);
  }//:
}///~