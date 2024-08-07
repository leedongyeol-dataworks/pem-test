<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "@/styles/common.scss";
@import "@/styles/reset.scss";
</style>
