<template>
  <div class="space" v-for="template, index in sampleData" :key="template">
    <Depth1Chart :chart="chartOptions" :data="sampleData[index]" :params="template.params"/>
  </div>
</template>

<script>
import Depth1Chart from '@/components/Depth1Chart.vue';

export default {
  name: 'ParenChart', 
  components: {
    Depth1Chart
  },
  data() {
    return {
      sampleData: [
        {
          id: 1,
          name: '1뎁스 데이터 1',
          params: [
            { param: 'system', value: '66' },
            { param: 'system', value: '72' },
            { param: 'system', value: '22' },
            { param: 'system', value: '15' },
            { param: 'system', value: '36' },
            { param: 'system', value: '91' }
          ],
          data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30)),
          children: [
            {
              id: 11,
              name: '2뎁스 데이터 1-1',
              data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30)),
              children: [
                {
                  id: 111,
                  name: '3뎁스 데이터 1-1-1',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 112,
                  name: '3뎁스 데이터 1-1-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 112,
                  name: '3뎁스 데이터 1-1-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                }
              ]
            },
            {
              id: 12,
              name: '2뎁스 데이터 1-2',
              data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30)),
              children: [
                {
                  id: 121,
                  name: '3뎁스 데이터 1-2-1',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 122,
                  name: '3뎁스 데이터 1-2-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 122,
                  name: '3뎁스 데이터 1-2-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                }
              ]
            },
            {
              id: 12,
              name: '2뎁스 데이터 1-2',
              data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30)),
              children: [
                {
                  id: 121,
                  name: '3뎁스 데이터 1-2-1',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 122,
                  name: '3뎁스 데이터 1-2-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                },
                {
                  id: 122,
                  name: '3뎁스 데이터 1-2-2',
                  data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 71+30))
                }
              ]
            }
          ]
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
