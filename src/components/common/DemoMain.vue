<template>
    <div id="wrap">
        <DefaultHeader />
        <div class="board">
            <ParenChart />
            <ParenChart2 />
            <GaugeGraph />
        </div>
    </div>
</template>
<script>
import ParenChart from '@/components/ParenChart.vue'
import ParenChart2 from '@/components/ParenChart2.vue'
import GaugeGraph from '@/components/GaugeGraph.vue'
import DefaultHeader from "@/components/default/DefaultHeader.vue"

export default {
    name: 'DemoMain',
    components: {
        DefaultHeader,
        ParenChart,
        ParenChart2,
        GaugeGraph
    }
}
</script>
<style lang="scss">
</style>