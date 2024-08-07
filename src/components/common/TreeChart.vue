<template>
    <div>
      <canvas ref="canvas" width="600" height="400"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
  
  Chart.register(...registerables, TreemapController, TreemapElement);
  
  export default {
    name: 'TreeChart',
    data() {
      return {
        chart: null,
        chartData: {
          datasets: [{
            label: 'Sample Treemap',
            tree: [
              {
                name: 'A',
                children: [
                  { name: 'A1', value: 100 },
                  { name: 'A2', value: 80 },
                ]
              },
              {
                name: 'B',
                children: [
                  { name: 'B1', value: 60 },
                  { name: 'B2', value: 40 },
                ]
              }
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataItem = context.raw;
                  return `${dataItem.name}: ${dataItem.value}`;
                }
              }
            }
          }
        }
      };
    },
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const ctx = this.$refs.canvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'treemap',
          data: this.chartData,
          options: this.options
        });
      }
    },
    beforeUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요에 따라 스타일 추가 */
  </style>
  