<template lang="">
    <header>
        <div class="header_wrap type2 type3">
        </div>
    </header>
</template>
<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
        }
    },
    computed: {
    title() {
        switch (+this.index) {
            case 0:
                return 'DASHBOARD';
            case 1:
                return 'TIMELINE';
            case 2:
                return 'OPERATION';
            case 3:
                return 'SEARCH';
            case 4:
                return 'REPORT';
            case 5:
                return 'ALERT';
            case 6:
                return 'CONFIG';
            default:
                return '';
        }
    }
}
}
</script>
<style lang="scss" scoped>
</style>