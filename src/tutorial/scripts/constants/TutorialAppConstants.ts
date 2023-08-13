import { env } from '$env/dynamic/public';

export class TutorialAppConstants {
  // /env 디렉토리 아래에 .env 파일을 생성하고 아래와 같이 설정한다.
  // /env/.env 환경변수 조회 
  /** API 서버 URL입니다. */
  public static readonly TUTORIAL_API_URL:string = env.PUBLIC_TUTORIAL_API_URL;
  /** API HTTP ptorocol입니다. */
  public static readonly TUTORIAL_API_PROTOCOL:string = env.PUBLIC_TUTORIAL_API_PROTOCOL;
  public static readonly PROTOCOL_AND_URL:string = `${TutorialAppConstants.TUTORIAL_API_PROTOCOL}://${TutorialAppConstants.TUTORIAL_API_URL}`; // as string; 
}