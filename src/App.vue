<template>
  <el-config-provider :locale="$i18n.locale == 'zh-CN' ? elloczh : ellocen">
    <el-affix :offset="0">
      <el-header class="headbar">
        <div class="logoview row-left">
          <template v-if="!$store.state.isDark">
            <img class="headlogo" alt="logo" src="./assets/media/Logo-B.png" />
          </template>
          <template v-if="$store.state.isDark">
            <img class="headlogo" alt="logo" src="./assets/media/Logo-W.png" />
          </template>
        </div>
        <div class="mainmenu row-left">
          {{ $store.state.title }}
        </div>
        <div class="settingmenu row-right">
          <el-row :gutter="0" justify="end" align="middle">
            <el-col :span="12"> </el-col>
            <el-col :span="12">
              <el-menu
                class="flexEnd"
                :default-active="$i18n.locale"
                mode="horizontal"
                background-color="rgb(213, 255, 241)"
                text-color="#000"
                active-text-color="#204472"
                :ellipsis="false"
                @select="settinghandleSelect"
              >
                <el-sub-menu class="menubutton row-right" index="lang">
                  <template #title>
                    {{ $t("loc") }}
                  </template>
                  <el-menu-item index="zh-CN"> 中文 </el-menu-item>
                  <el-menu-item index="en"> English </el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-header>
    </el-affix>
    <el-container>
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import elzh from "element-plus/lib/locale/lang/zh-cn";
import elen from "element-plus/lib/locale/lang/en";
import urlAPI from "@/services/api";
import utils from "@/services/utils";
import { useStore } from "vuex";
import { key } from "./store";

export default defineComponent({
  data() {
    return {
      isCollapse: true,
      userName: "",
      settinghandleSelect: (key: string) => {
        console.log("===== settinghandleSelect =====");
        console.log(key);

        this.$i18n.locale = key;
        sessionStorage.setItem("lang", key);
        this.$router.push({ params: { loc: key } }).then(() => {
          this.$router.go(0);
        });
        // window.location.reload();
      },
      logoW: "",
    };
  },

  components: {},

  mixins: [utils, urlAPI],

  setup() {
    const store = useStore(key);
    const elloczh = ref(elzh);
    const ellocen = ref(elen);
    return { elloczh, ellocen, store };
  },

  mounted() {
    this.$store.state.title = this.$t("page.chart");
    if (this.isundefined(this.$route.params.loc)) {
      const loc = sessionStorage.getItem("lang");
      if (loc != null) {
        this.setloc(loc);
      }
    } else {
      this.setloc(this.$route.params.loc as string);
    }
  },

  methods: {
    elbutton() {
      if (
        !this.isundefined(this.$route.name) &&
        this.$route.name != undefined
      ) {
        sessionStorage.removeItem("data");
        if (this.$route.fullPath != "/")
          this.$store.state.routePath = this.$route.fullPath;
        const jumpName = this.addButtonJump[this.$route.name] as string;
        this.$router.push({ name: jumpName });
      }
    },
  },
});
</script>
<style>
html,
body {
  height: 100%;
  min-width: 345px;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar:horizontal {
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #0003;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background-color: #0000004d;
}
.dark ::-webkit-scrollbar-thumb {
  background-color: #fff3;
}
.dark ::-webkit-scrollbar-thumb:hover {
  background-color: #fff6;
}

.w100 {
  width: 100%;
}
.w80 {
  width: 80%;
}
.w50px {
  width: 50px;
}
.w100px {
  width: 100px !important;
}
.w200px {
  width: 200px !important;
}

.minw100px {
  min-width: 100px;
}

.minh50px {
  min-height: 50px;
}

.h10px {
  height: 10px;
}
.h25px {
  height: 25px;
}
.h50px {
  height: 50px;
}
.h100px {
  height: 100px !important;
}

.display-flex {
  display: flex;
}

.mr10 {
  margin-right: 10px;
}
.mr25 {
  margin-right: 25px;
}
.mr50 {
  margin-right: 50px;
}

.mt10 {
  margin-top: 10px;
}

.mb10 {
  margin-bottom: 10px;
}

.fs16 {
  font-size: 16px !important;
}

.labelTitle {
  text-align: left;
  font-size: 10px;
  color: gray;
}

.bottomRight {
  position: fixed;
  width: 50px;
  height: 50px !important;
  right: 20px;
  bottom: 20px;
  z-index: 5;
}

.headbar {
  min-width: 345px;
  background-color: rgb(213, 255, 241);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12);
  z-index: 9;
  position: sticky;
}
.row-left {
  float: left !important;
}
.row-right {
  float: right !important;
}
.display-contents {
  display: contents;
}
.el-collapse-item__wrap,
.el-collapse-item__content {
  height: 100%;
}
.el-header {
  --el-header-height: 50px !important;
  --el-header-padding: 0px 0px !important;
}
.menubutton {
  height: 50px !important;
  line-height: 50px !important;
}
.el-menu a {
  text-decoration: none;
}
.el-menu {
  border-bottom: none !important;
}
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
}
.el-submenu__title:hover {
  color: rgb(213, 255, 241) !important;
  background-color: #64c1bf !important;
}
.el-menu-item:hover {
  color: rgb(213, 255, 241) !important;
  background-color: #64c1bf !important;
}
.logoview {
  width: 118px;
  height: 50px;
  text-align: center;
}
.headlogo {
  height: 40px;
  margin: 5px;
}
.mainmenu {
  padding-left: 15px;
  /* width: calc(100% - 150px); */
  height: 50px;
  line-height: 50px;
}
.settingmenu .el-sub-menu {
  height: 50px;
}
.rightMenuWidth {
  width: 50%;
}
.flexEnd {
  justify-content: flex-end;
}
.mainView {
  height: 100%;
  background: orange;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}

.dataList {
  position: relative;
  height: calc(100% - 22px);
}
.pagination {
  position: fixed;
  bottom: 10;
  z-index: 9;
}

.search {
  line-height: 50px;
  padding-right: 30px;
}

@media screen and (max-width: 435px) {
  .logoview {
    width: 85px;
  }
  .mainmenu {
    min-width: 235px;
  }
  .el-dialog {
    width: 90% !important;
  }
  .el-popover {
    min-width: 300px !important;
    width: 85% !important;
  }
}
</style>
<style scoped>
.el-container {
  height: calc(100% - 50px);
}

/* .el-main {
  height: calc(100% - 100px);
} */

#mainView {
  height: 100%;
}
</style>
