import { env } from '$env/dynamic/public';

// /env 디렉토리 아래에 .env 파일을 생성하고 아래와 같이 설정한다.
// /env/.env 환경변수 조회 
/** API 서버 URL입니다. */
export const TUTORIAL_API_URL: string = env.PUBLIC_TUTORIAL_API_URL;
/** API HTTP ptorocol입니다. */
export const TUTORIAL_API_PROTOCOL: string = env.PUBLIC_TUTORIAL_API_PROTOCOL; 

const PROTOCOL_AND_URL:string = `${TUTORIAL_API_PROTOCOL}://${TUTORIAL_API_URL}`; // as string; 

/** API endpoints를 가지고 있습니다.  */
export const TUTORIAL_END_POINTS = {
  /** 간단한 text를 반환 받습니다.  */
  GET_TEXT: `${PROTOCOL_AND_URL}/tutorial/fetch/get-text`,
  /** json을 반환 받습니다. */
  GET_JSON: `${PROTOCOL_AND_URL}/tutorial/fetch/get-json`,
  /** 간단한 HTML을 가져옵니다.  */
  GET_HTML: `${PROTOCOL_AND_URL}/tutorial/fetch/get-html`,
  /** 이미지를 다운로드 받습니다. */
  GET_IMAGE_OCTET: `${PROTOCOL_AND_URL}/tutorial/fetch/get-image-octet`,
  /** JavaScript를 다운로드 받습니다. */
  GET_JAVASCRIPT: `${PROTOCOL_AND_URL}/tutorial/fetch/fetch-javascript`,
  /** 파일을 다운로드 받습니다. */
  GET_DOWNLOAD: `${PROTOCOL_AND_URL}/tutorial/fetch/get-image-octet`,
  /** 파일을 업로드합니다.  */
  FILE_UPLOAD : `${PROTOCOL_AND_URL}/tutorial/file/multi-upload`,
  /** Path Variables 사용  */
  PATH_VARIABLE: `${PROTOCOL_AND_URL}/tutorial/fetch/path-variable`,
  /** Request Param 사용 */
  REQUEST_PARAM: `${PROTOCOL_AND_URL}/tutorial/fetch/request-param`,
  /** RequestBody 사용 */
  REQUEST_BODY: `${PROTOCOL_AND_URL}/tutorial/fetch/request-body`,
  /** Model Attribute 사용 */
  MODEL_ATTRIBUTE: `${PROTOCOL_AND_URL}/tutorial/fetch/model-attribute`,
}

