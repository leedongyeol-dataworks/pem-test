<template>
    <div id="wrap">
        <DefaultHeader :index="this.$route.query.myParam"/>
        <div class="board type2">
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
import DefaultHeader from "@/components/default/DefaultHeader2.vue"

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