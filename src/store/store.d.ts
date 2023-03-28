import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // 声明自己的 store state
  interface State {
    isDark: boolean; // 是否为暗黑模式
    routePath: string; // 当前路由
    title: string; // 当前页面标题
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
