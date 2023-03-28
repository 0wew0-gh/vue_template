<template>
  <div>
    <el-button circle @click="initChart()">
      <el-icon><Check /></el-icon>
    </el-button>
    Init
  </div>
  <div id="chart" ref="chartView"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as echarts from "echarts";
import utils from "@/services/utils";

export default defineComponent({
  data() {
    return {};
  },
  mixins: [utils],
  components: {},
  mounted() {
    console.log(window.location.href);
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.chartView as HTMLCanvasElement);
      var option = this.echartOption;
      option.xAxis.data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      option.series.push({
        name: "test",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        showSymbol: false,
        smooth: true,
      });
      // 绘制图表
      myChart.setOption(option);
    },
  },
});
</script>
<style>
#chart {
  width: 800px;
  height: 500px;
}
</style>
