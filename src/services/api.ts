// import axios from "axios";
// import qs from "qs";
import { ElNotification } from "element-plus";
import i18n from "../assets/i18n";
import router from "../router";

export default {
  methods: {
    /// 通用的api统一错误处理
    _errorhandling(error: any, isbacklogin = true) {
      let err: string = error.message;
      let code = 0;
      const resp: any | null = error.response;
      let p = "";
      if (resp != null) {
        if (typeof resp.data !== "string") {
          if (error.response.data != undefined && error.response.data != null) {
            err = error.response.data.msg;
            code = error.response.data.code;
            if (error.response.data.p) {
              p = error.response.data.p;
            }
            if (error.response.data.err) {
              p = error.response.data.err;
            }
          }
        }
      }
      if (isbacklogin && code == 400) {
        this._backLoginPage(err);
      } else {
        ElNotification({
          title: i18n.global.t("state.error"),
          message: err + (p == "" ? p : "[" + p + "]"),
          type: "error",
        });
      }
    },

    /// 登出
    _backLoginPage(notifMsg = "") {
      if (notifMsg != "") {
        ElNotification({
          title: i18n.global.t("state.error"),
          message: notifMsg,
          type: "error",
        });
      }
      sessionStorage.removeItem("exToken");
      router.push({ name: "login" });
    },
  },
};
