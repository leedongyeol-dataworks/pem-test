<template>
    <ul>
      <li @click="toggle" class="top_node cursor_pointer">
        {{ node.name }}
        <span v-if="node.state === '0'">⚫</span>
        <span v-else-if="node.state === '1'">🟢</span>
        <span v-else-if="node.state === '2'">🟡</span>
        <span v-else-if="node.state === '3'">🔴</span>
      </li>
      <li v-if="hasChildren && isOpen">
        <tree-node 
        v-for="child in node.children" 
        :key="child.id" 
        :node="child">{{ node.name }}</tree-node>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'TreeNode',
    props: {
      node: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      hasChildren() {
        return this.node.children && this.node.children.length > 0;
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    },
    mounted() {
      if(this.index === 0) this.isOpen = true
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding-left: 20px;
  }
  li {
    margin: 5px 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  