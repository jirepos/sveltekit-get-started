import { TUTORIAL_END_POINTS} from './constants/TutorialConstants';

/**
 * API Clinet의 슈퍼클래스입니다. 
 * @since 1.0.0 
 */
export class TutorialApiClientBase { 
  /** API endpoints입니다. */
  protected static readonly END_POINTS = TUTORIAL_END_POINTS;
}

