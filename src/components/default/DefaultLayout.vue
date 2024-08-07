<template lang="">
    <nav>
        <TreeNode v-for="node in treeData" :key="node.id" :node="node"></TreeNode>
    </nav>
    <router-view />
</template>
<script>
import TreeNode from '@/components/common/TreeNode.vue';

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
                name: 'Root 1',
                children: [
                {
                    id: 2,
                    name: 'Child 1.1',
                    children: [
                    {
                        id: 3,
                        name: 'Grandchild 1.1.1'
                    },
                    {
                        id: 4,
                        name: 'Grandchild 1.1.2'
                    }
                    ]
                },
                {
                    id: 5,
                    name: 'Child 1.2'
                }
                ]
            },
            {
                id: 6,
                name: 'Root 2',
                children: [
                {
                    id: 7,
                    name: 'Child 2.1'
                }
                ]
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style lang="">
    
</style>