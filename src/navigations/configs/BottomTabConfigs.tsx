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
    name: "홈",
    component: MainPage,
  },
  {
    path: "/skin/analysis",
    name: "내 피부분석",
    exact: true,
    component: SkinAnalysis,
  },
  {
    path: "/skin/change",
    name: "내 피부변화",
    exact: true,
    component: SkinChange,
  },
  {
    path: "/skin/record",
    name: "피부기록",
    exact: true,
    component: SkinRecord,
  },
  {
    path: "/hospital",
    name: "병원찾기",
    component: Hospital,
  },
  {
    path: "/video",
    name: "1분 피부 영상",
    component: Video,
  },
  {
    path: "/encyclopedia",
    name: "피부 백과사전",
    component: Encyclopedia,
  },
  {
    path: "/mypage",
    name: "마이페이지",
    component: Mypage,
  },
];
