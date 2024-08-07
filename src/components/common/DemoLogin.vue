<template lang="">
    <div>
        <button @click="login">로그인</button>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
            this.$router.push({path:'/main'})
        }
    }
}
</script>
<style lang="">
    
</style>