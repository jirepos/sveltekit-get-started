import { GwAppConstants } from '$src/lib/app/gw/scripts/constants/GwAppConstants';

export class BoardApiConstants extends GwAppConstants {
  static readonly BOARD_URL = `${GwAppConstants.API_SERVER_DOMAIN}/board`;

  public static readonly END_POINTS = {
    /** 간단한 text를 반환 받습니다.  */
    GET_TEXT: `${BoardApiConstants.BOARD_URL}/get-article`
  };
}