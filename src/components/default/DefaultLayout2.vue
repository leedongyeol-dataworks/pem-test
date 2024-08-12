<template lang="">
    <nav class="type2">
        <TreeNode></TreeNode>
    </nav>
    <router-view />
</template>
<script>
import TreeNode from '@/components/common/IconNode.vue';

export default {
    name: "DefaultLayout",
    components: {
        TreeNode,
    },
    data() {
        return {
            treeData: []
        }
    },
    methods: {
        init() {
            this.treeData.push({
                id: 1,
                name: 'BW',
                children: [
                    {
                        id: 2,
                        name: 'PDF',
                        state: '2'
                    },
                    {
                        id: 5,
                        name: 'STE',
                        state: '0'
                    }
                ]
            },
            {
                id: 6,
                name: 'Test',
                children: [
                    {
                        id: 7,
                        name: 'NIS',
                        state: '1'
                    },
                    {
                        id: 8,
                        name: 'MTE',
                        state: '0'
                    },
                    {
                        id: 9,
                        name: 'STE',
                        state: '0'
                    }
                ]
            },
            {
                id: 6,
                name: 'CLOUD',
                children: [
                    {
                        id: 7,
                        name: 'TR2',
                        state: '0'
                    },
                    {
                        id: 8,
                        name: 'HCT',
                        state: '0'
                    },
                ]
            },
            {
                id: 6,
                name: 'ERP',
                children: [
                    {
                        id: 7,
                        name: 'PDF',
                        state: '2'
                    },
                    {
                        id: 8,
                        name: 'BDW',
                        state: '3'
                    },
                ]
            },
            {
                id: 6,
                name: 'default',
                children: [
                    {
                        id: 7,
                        name: 'HMJCLOUD',
                        state: '0'
                    },
                    {
                        id: 8,
                        name: 'PFD',
                        state: '2'
                    },
                ]
            }
        )}
    },
    mounted() {
        this.init()
    }
}
</script>
<style lang="">
    
</style>