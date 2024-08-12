<template>
    <div class="temporary">
        <DefaultHeader :index="this.$route.query.myParam"/>
        <img :src="require(`@/assets/images/temporary${this.$route.query.myParam}.png`)" alt="">
    </div>
</template>

<script>
import DefaultHeader from "@/components/default/DefaultHeader2.vue"
export default {
    components: {
        DefaultHeader,
    },
    data() {
        return {
        }
    },
}
</script>

<style>

</style>