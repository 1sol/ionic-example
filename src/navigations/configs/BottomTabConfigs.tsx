/* eslint-disable import/no-anonymous-default-export */
import {
  Encyclopedia,
  Hospital,
  MainPage,
  Mypage,
  SkinAnalysis,
  SkinChange,
  SkinRecord,
  Video,
} from "@pages";

export default [
  {
    path: "/",
    tab: "홈",
    component: MainPage,
  },
  {
    path: "/skin/analysis",
    tab: "내 피부분석",
    component: SkinAnalysis,
  },
  {
    path: "/skin/change",
    tab: "내 피부변화",
    component: SkinChange,
  },
  {
    path: "/skin/record",
    tab: "피부기록",
    component: SkinRecord,
  },
  {
    path: "/hospital",
    tab: "병원 찾기",
    component: Hospital,
  },
  {
    path: "video",
    tab: "1분 피부 영상",
    component: Video,
  },
  {
    path: "/encyclopedia",
    tab: "피부 백과사전",
    component: Encyclopedia,
  },
  {
    path: "/mypage",
    tab: "마이페이지",
    component: Mypage,
  },
];
