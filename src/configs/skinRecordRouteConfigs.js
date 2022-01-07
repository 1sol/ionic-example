import SkinRecordPage from "@pages/skinRecord/SkinRecordPage";

const skinRecordRouteConfigs = [
  /**
   * 내 피부 변화
   */
  {
    path: "/skin/record",
    title: "피부 기록",
    exact: true,
    component: SkinRecordPage,
  },
];

export default skinRecordRouteConfigs;
