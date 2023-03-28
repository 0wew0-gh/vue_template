import i18n from "../assets/i18n";

interface series {
  name: string;
  data: number[];
  type: string;
  showSymbol: boolean;
  smooth: boolean;
}
export default {
  data() {
    return {
      //图表设置
      echartOption: {
        tooltip: {
          trigger: "axis",
          formatter: function (params: any[]) {
            console.log(params);
            // let label = params[0].axisValueLabel;
            // let i = 0;
            // params.forEach((p) => {
            //   label +=
            //     (i++ % 3 == 0 ? "<br/>" : "&emsp;") +
            //     p.marker +
            //     p.seriesName +
            //     ": " +
            //     p.data.value[1] +
            //     p.data.unit;
            // });
            // return label;
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#000",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          axisPointer: {
            animation: true,
            type: "line",
          },
        },
        legend: [
          {
            icon: "roundRect",
            type: "scroll",
            width: "65%",
            data: ["test"],
          },
        ],
        grid: {
          top: 30,
          left: 60,
          right: 135,
          bottom: 70,
        },
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            dataView: {},
            magicType: {},
            saveAsImage: { name: "整理异常数据" },
          },
        },
        dataZoom: [
          {
            type: "slider", //slider表示有滑动块的，
            show: true,
            xAxisIndex: [0], //表示x轴折叠
          },
          {
            type: "inside", //滚轮缩放
            xAxisIndex: [0], //表示x轴折叠
            // xAxisIndex: [0], //表示y轴折叠
          },
        ],
        xAxis: {
          boundaryGap: false,
          splitLine: {
            show: false,
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#bbb",
            },
          },
          splitNumber: 8,
          data: {},
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#bbb",
            },
          },
        },
        series: [] as series[],
      },
      continentList: ["", "Asia", "Europe", "Africa", "America", "Oceania"],
    };
  },
  methods: {
    /// 设置当前语言
    /// routeloc: 路由中的语言参数
    setloc(routeloc: string) {
      let loc: string = routeloc;
      if (loc == "zh" || loc == "zh-cn" || loc == "zh_cn" || loc == "zh_CN") {
        loc = "zh-CN";
      }
      if (loc != "en" && loc != "zh-CN") {
        loc = "zh-CN";
      }
      sessionStorage.setItem("lang", loc);
      i18n.global.locale = loc as "zh-CN" | "en";
    },

    /// 判断是否为undefined
    isundefined(str: any): boolean {
      if (str == null || str == undefined || str == "undefined") {
        return true;
      }
      return false;
    },
  },
};
