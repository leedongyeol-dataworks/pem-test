<template>
  <highcharts :options="chartOptions" ref="childChart"></highcharts>
  <ul v-if="data.children">
    <li v-for="(child, index) in data.children" :key="index">
      <NormalChart :data="child" @setChildChartRef="handleChildChartRef" />
    </li>
  </ul>
</template>

<script>
import NormalChart from '@/components/NormalChart.vue'

export default {
  name: 'NormalChart',
  components: {
    NormalChart
  },
  emits: ['setChildChartRef'],
  props: {
    data: Object
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          margin: [2, 2, 2, 2], // 위, 오른쪽, 아래, 왼쪽 여백을 0으로 설정
          spacing: [2, 2, 2, 2], // 위, 오른쪽, 아래, 왼쪽 여백을 0으로 설정
          backgroundColor: 'rgba(0, 0, 0, 0)', // 배경색
        },
        title: {
          style: {
            display: 'none'
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
      xAxis: {
        type: 'linear',
        gridLineWidth: 0, // X축 그리드 라인 없음
        tickInterval: 3, // X축 눈금 간격
        lineColor: '#ffffff', // X축 라인 색상
        labels: {
          style: {
            color: '#ffffff', // X축 레이블 색상
            fontSize: '12px', // X축 레이블 폰트 크기
          },
        },
      },
      yAxis: {
        min: 0, // Y축 최소값
        max: 100, // Y축 최대값
        gridLineColor: 'rgba(255, 255, 255, 0.1)', // Y축 그리드 라인 색상
        title: {
          text: null, // Y축 제목 없음
        },
        labels: {
          style: {
            color: '#ffffff', // Y축 레이블 색상
            fontSize: '12px', // Y축 레이블 폰트 크기
          },
          formatter: function () {
            if (this.value >= 1000) {
              return this.value / 1000 + 'k'; // 큰 숫자는 'k' 단위로 표시
            }
            return this.value;
          },
        },
        plotLines: [{
          value: 50,
          width: 2,
        }],
      },
      series: [{
        name: 'Gold Difference',
        zones: [{
          value: 50, // 50 이하일 경우
          color: 'rgba(255, 0, 0, 0.7)', // 빨간색
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'rgba(255, 0, 0, 0.3)'], // 빨간색 그라디언트 시작
              [1, 'rgba(255, 0, 0, 0)']   // 빨간색 그라디언트 끝
            ]
          }
        }, {
          color: 'rgba(0, 0, 255, 0.7)', // 50 이상일 경우 파란색
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, 'rgba(0, 0, 255, 0.3)'], // 파란색 그라디언트 시작
              [1, 'rgba(0, 0, 255, 0)']   // 파란색 그라디언트 끝
            ]
          }
        }],
        marker: {
          enabled: false // 마커 비활성화
        },
      }],
      plotOptions: {
        area: {
          lineWidth: 2,
          shadow: false,
          states: {
            hover: {
              lineWidth: 2
            }
          },
          threshold: null,
        },
      },
        colors: ['#42A5F5']
      }
    };
  },
  created() {
    this.chartOptions.series[0].data = this.data.data;
  },
  mounted() {
    this.$emit('setChildChartRef', this.$refs.childChart);
  },
  methods: {
    handleChildChartRef(ref) {
      this.$emit('setChildChartRef', ref);
    },
  }
};
</script>

<style scoped>
</style>
