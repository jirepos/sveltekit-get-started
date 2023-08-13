import { TutorialAppConstants } from "../../../constants/TutorialAppConstants"
export class TutorialApiConstants extends TutorialAppConstants {

  static readonly END_POINTS = {
    /** 간단한 text를 반환 받습니다.  */
    GET_TEXT: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/get-text`,
    /** json을 반환 받습니다. */
    GET_JSON: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/get-json`,
    /** 간단한 HTML을 가져옵니다.  */
    GET_HTML: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/get-html`,
    /** 이미지를 다운로드 받습니다. */
    GET_IMAGE_OCTET: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/get-image-octet`,
    /** JavaScript를 다운로드 받습니다. */
    GET_JAVASCRIPT: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/fetch-javascript`,
    /** 파일을 다운로드 받습니다. */
    GET_DOWNLOAD: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/get-image-octet`,
    /** 파일을 업로드합니다.  */
    FILE_UPLOAD: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/file/multi-upload`,
    /** Path Variables 사용  */
    PATH_VARIABLE: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/path-variable`,
    /** Request Param 사용 */
    REQUEST_PARAM: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/request-param`,
    /** RequestBody 사용 */
    REQUEST_BODY: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/request-body`,
    /** Model Attribute 사용 */
    MODEL_ATTRIBUTE: `${TutorialApiConstants.PROTOCOL_AND_URL}/tutorial/fetch/model-attribute`,
  }
} 
