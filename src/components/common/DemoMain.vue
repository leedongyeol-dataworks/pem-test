<template>
    <div id="wrap">
        <DefaultHeader/>
        <div class="board type2 type3">
            <ParenData />
            <ParenData2 />
            <GaugeGraph />
        </div>
    </div>
</template>
<script>
import ParenData from '@/components/ParenData.vue'
import ParenData2 from '@/components/ParenData2.vue'
import GaugeGraph from '@/components/GaugeGraph.vue'
import DefaultHeader from "@/components/default/DefaultHeader.vue"
export default {
    name: 'DemoMain',
    components: {
        DefaultHeader,
        ParenData,
        ParenData2,
        GaugeGraph
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss">
</style>