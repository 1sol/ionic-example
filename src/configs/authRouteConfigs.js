import LoginPage from "@pages/auth/LoginPage/LoginPage";
import FindIdPage from "@pages/auth/FindAuthPage/FindIdPage";
import FindPasswordPage from "@pages/auth/FindAuthPage/FindPasswordPage";

/**
 * auth
 */

const authRouteConfigs = [
  /**
   * 로그인
   */

  {
    path: "/login",
    title: "로그인",
    component: LoginPage,
  },
  /**
   * 아이디 찾기
   */
  {
    exact: true,
    path: "/find/id",
    title: "아이디 찾기",
    component: FindIdPage,
  },
  /**
   * 비밀번호 찾기
   */
  {
    exact: true,
    path: "/find/password",
    title: "비밀번호 찾기",
    component: FindPasswordPage,
  },
];

export default authRouteConfigs;
