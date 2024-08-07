<template>
  <div class="chart_wrap">
    <div class="main_chart">
    <highcharts :options="chartOptions"></highcharts>
    <div class="move_depth">
      <span v-for="item in 1" :key="item" @click="moveDepth2">
        <i class="xi-play-circle-o"></i>
      </span>
    </div>
    <ul class="condition">
      <li v-for="item in params" :key="item" class="item">
        <div class="state">
          <div class="mark" :style="{'left':-item.value+'px'}"></div>
        </div>
        <div class="tool_tip">
          {{ item.param }}
        </div>
      </li>
    </ul>
    </div>
    <ul class="child_charts">
      <li v-for="index in 3" :key="index">
        <i v-if="data.children[index - 1]">
          <NormalChart2 :data="data.children[index - 1]" />
          <div class="move_depth">
            <span v-for="idx in 1" :key="idx" @click="moveDepth3($event, index)">
              <i class="xi-play-circle-o"></i>
            </span>
          </div>
          <span v-if="data.children[index - 1].length === 0">No Data</span>
        </i>
      </li>
    </ul>
</div>
</template>
  
  <script>
import NormalChart2 from './NormalChart2.vue';

  export default {
    name: 'ParenChart', 
    props: ['chart', 'data','params'],
    components: {NormalChart2},
    data() {
  return {
    childChartRefs: [],
    chartOptions: {
      chart: {
        type: 'area',
        backgroundColor: 'rgba(0, 0, 0, 0)', // 배경색
      },
      title: {
        text : this.data.name,
        align: 'center',
        style: {
          color: '#000', // 흰색 텍스트
          fontSize: '20px', // 제목 폰트 크기
          fontWeight: 'bold',
        },
      },
      credits: {
        enabled: false, // Highcharts 링크 비활성화
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
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)', // 툴팁 배경색
        borderColor: '#333333', // 툴팁 테두리 색상
        borderRadius: 10, // 툴팁 모서리 둥글기
        style: {
          color: '#F0F0F0', // 툴팁 텍스트 색상
          fontSize: '12px',
        },
        formatter: function () {
          return `<b>시간:</b> ${this.x}분<br/><b>골드 차이:</b> ${this.y}`;
        },
      },
      legend: {
        enabled: false, // 범례 비활성화
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
    }
  };
}
,
    methods: {
      moveDepth2(event) {
        const ZOOM = event.target.closest('.chart_wrap')

        if(ZOOM) {
          if (ZOOM.classList.contains('depth2')) {
            ZOOM.classList.remove('depth2')
          } else {
            ZOOM.classList.add('depth2')
          }
        }
        
      },
      moveDepth3(event,index) {
        const ZOOM = event.target.closest('.chart_wrap')
        
        if(ZOOM) {
          const focusClass = `focus-${index}`;
          if (ZOOM.classList.contains('depth3')) {
            ZOOM.classList.remove('depth3','focus-1', 'focus-2', 'focus-3')
          } else {
            ZOOM.classList.add('depth3',focusClass)
          }
        }
        
      },
    },
    created() {
      this.chartOptions.series[0].data = this.data.data
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  