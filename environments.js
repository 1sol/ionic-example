/* eslint-disable import/no-anonymous-default-export */
import config from "./src/config.json";

const SHARE_MAP = {
  LOCALE: "ko",
  PROJECT_SYMBOL: "ai2u_project",
};

const ENV_MAP = {
  development: {
    API_URL: "",
  },
  staging: {
    API_URL: "",
  },
  production: {
    API_URL: "",
  },
};

export default {
  ...SHARE_MAP,
  ...ENV_MAP[config.RN_ENV],
};
