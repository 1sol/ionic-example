import SkinAnalysisPage from "@pages/skinAnalysis/SkinAnalysisPage";
import QuestionPage from "@pages/skinAnalysis/question/QuestionPage";
import UploadPage from "@pages/skinAnalysis/upload/UploadPage";
import ResultPage from "@pages/skinAnalysis/result/ResultPage";

/**
 * 내 피부 분석
 */

const skinAnalysisRouteConfigs = [
  /**
   * 내 피부 분석
   */
  {
    path: "/skin/analysis",
    title: "내 피부 분석",
    exact: true,
    component: SkinAnalysisPage,
  },
  /**
   * 피부 문진
   */
  {
    path: "/skin/question",
    title: "피부 문진",
    exact: true,
    component: QuestionPage,
  },
  /**
   * 사진 업로드
   */
  {
    path: "/skin/upload",
    title: "내 피부 분석",
    exact: true,
    component: UploadPage,
  },
  /**
   * 내 피부 분석 결과
   */
  {
    path: "/skin/result",
    title: "내 피부 분석 결과",
    exact: true,
    component: ResultPage,
  },
];

export default skinAnalysisRouteConfigs;
