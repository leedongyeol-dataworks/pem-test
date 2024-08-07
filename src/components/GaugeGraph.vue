<template>
  <div class="space">
    <div class="gauge-container">
      <ul>
        <li v-for="(entry, index) in sampleData" :key="index">
          <div class="gauge">
            <transition-group name="gauge-bar" tag="div">
              <div
                v-for="n in 10"
                :key="n"
                class="gauge-bar"
                :class="getGaugeClass(n, entry.data)"
                :style="getGaugeStyle(n)"
              ></div>
            </transition-group>
          </div>
          <div class="title">
            {{ entry.date }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: [
        { date: "2019", data: Math.floor(Math.random() * 101) },
        { date: "2020", data: Math.floor(Math.random() * 101) },
        { date: "2021", data: Math.floor(Math.random() * 101) },
        { date: "2022", data: Math.floor(Math.random() * 101) },
        { date: "2023", data: Math.floor(Math.random() * 101) },
        { date: "2024", data: Math.floor(Math.random() * 101) },
      ],
    };
  },
  methods: {
    updateData() {
      this.sampleData = this.sampleData.map((entry) => ({
        ...entry,
        data: Math.floor(Math.random() * 101),
      }));
    },
    getGaugeClass(n, value) {
      const fullBlocks = Math.floor(value / 10);
      const hasPartialBlock = value % 10 !== 0;

      if (n <= fullBlocks) {
        return "gauge-bar-full";
      } else if (n === fullBlocks + 1 && hasPartialBlock) {
        return "gauge-bar-partial";
      }
      return "gauge-bar-empty"; // 빈 칸을 위한 기본 클래스
    },
    getGaugeStyle(n) {
      const delay = n * 50;
      return {
        transitionDelay: `${delay}ms`,
      };
    },
  },
  mounted() {
    this.interval = setInterval(this.updateData, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
</style>
