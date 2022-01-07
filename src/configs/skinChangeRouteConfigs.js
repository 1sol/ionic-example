import SkinChangePage from "@pages/skinChange/SkinChangePage";

const skinChangeRouteConfigs = [
  /**
   * 내 피부 변화
   */
  {
    path: "/skin/change",
    title: "내 피부 변화",
    exact: true,
    component: SkinChangePage,
  },
];

export default skinChangeRouteConfigs;
